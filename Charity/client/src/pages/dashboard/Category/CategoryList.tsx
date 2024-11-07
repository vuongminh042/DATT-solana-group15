import { Button, Popconfirm, Space, Table, Typography, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const CategoryList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        // Chỉnh sửa URL thành localhost:8000
        fetch("http://localhost:8000/api/category")
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setData(result.data.map(item => ({ key: item._id, ...item })));
                } else {
                    message.error(result.message || "Failed to load categories");
                }
                setLoading(false);
            })
            .catch((error) => {
                message.error("Failed to load categories");
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (key) => {
        // Chỉnh sửa URL thành localhost:8000
        fetch(`http://localhost:8000/api/category/${key}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    message.success("Category deleted successfully!");
                    setData(data.filter((item) => item.key !== key));
                } else {
                    message.error(result.message || "Failed to delete category");
                }
            })
            .catch((error) => {
                message.error("Failed to delete category");
                console.error("Error:", error);
            });
    };

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link" onClick={() => navigate(`/dashboard/category-edit/${record.key}`)}>Edit</Button>
                    <Popconfirm
                        title="Are you sure you want to delete this category?"
                        onConfirm={() => handleDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Title level={2}>Category List</Title>
            <Button
                type="primary"
                style={{ marginBottom: 16 }}
                onClick={() => navigate('/dashboard/category-add')}
            >
                Add Category
            </Button>
            <Table columns={columns} dataSource={data} loading={loading} rowKey="key" />
        </div>
    );
};

export default CategoryList;
