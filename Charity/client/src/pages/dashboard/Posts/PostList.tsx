import { Image, Space, Table, Typography, message, Popconfirm } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/post');
            if (response.data.success) {
                setPosts(response.data.data);
            } else {
                message.error("Không thể tải danh sách bài viết");
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            message.error("Có lỗi xảy ra khi tải danh sách bài viết");
        }
    };

    // Function to delete a post
    const handleDelete = async (postId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/post/${postId}`);
            if (response.data.success) {
                message.success("Bài viết đã được xóa thành công!");
                setPosts(posts.filter(post => post._id !== postId));
            } else {
                message.error("Có lỗi xảy ra khi xóa bài viết");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            message.error("Có lỗi xảy ra!");
        }
    };

    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <Title level={5}>{text}</Title>,
        },
        {
            title: 'Ảnh',
            dataIndex: 'images',
            key: 'images',
            render: (url) => <Image width={100} src={url} alt="Post image" />,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Danh mục',
            dataIndex: 'category_id',
            key: 'category_id',
            render: (category) => category.name || 'Không có danh mục',
        },
        {
            title: 'Người dùng',
            dataIndex: 'user_id',
            key: 'user_id',
            render: (user) => user.name || 'Không có người dùng',
        },
        {
            title: 'Tin nhắn',
            dataIndex: 'messages',
            key: 'messages',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/dashboard/post-edit/${record._id}`}>Chỉnh sửa</Link>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa bài viết này?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Xóa"
                        cancelText="Hủy"
                    >
                        <a style={{ color: 'red' }}>Xóa</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Danh sách Bài viết</Title>
            <Table dataSource={posts} columns={columns} rowKey="_id" />
        </div>
    );
};

export default PostList;
