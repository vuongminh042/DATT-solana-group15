import { Image, Space, Table, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const { Title } = Typography;

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Giả sử bạn có một API endpoint để lấy danh sách bài viết
                const response = await axios.get('https://your-api-endpoint.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

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
            render: (images) => <Image width={100} src={images} />,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Người dùng',
            dataIndex: 'user_id',
            key: 'user_id',
            render: (user_id) => <span>{user_id}</span>,
        },
        {
            title: 'Danh mục',
            dataIndex: 'category_id',
            key: 'category_id',
            render: (category_id) => <span>{category_id}</span>,
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* Bạn có thể thêm các hành động như chỉnh sửa hoặc xóa ở đây */}
                    <a href={`/edit/${record._id}`}>Chỉnh sửa</a>
                    <a href={`/delete/${record._id}`} style={{ color: 'red' }}>Xóa</a>
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
