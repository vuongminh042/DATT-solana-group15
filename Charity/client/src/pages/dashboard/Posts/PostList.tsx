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
            render: () => <Title level={5}></Title>,
        },
        {
            title: 'Ảnh',
            dataIndex: 'images',
            key: 'images',
            render: () => <Image width={100} src="" />,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: () => <p></p>,
        },
        {
            title: 'Danh mục',
            dataIndex: 'category_id',
            key: 'category_id',
            render: () => <span></span>,
        },
        {
            title: 'Hành động',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a href="">Chỉnh sửa</a>
                    <a href="" style={{ color: 'red' }}>Xóa</a>
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
