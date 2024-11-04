import { PlusOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Danh mục',
            dataIndex: 'category_id',
            key: 'category_id',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (_: unknown, record: unknown) => (
                <Button type="link" onClick={() => console.log(record)}>Chi tiết</Button>
            ),
        },
    ];

    return (
        <div>
            <Button type="primary" icon={<PlusOutlined />} style={{ marginBottom: 16 }}>
                Thêm Bài Viết
            </Button>
            <Table columns={columns} dataSource={posts} />
        </div>
    );
};

export default PostList;
