import { Button, Popconfirm, Space, Table, Typography } from 'antd';

const { Title } = Typography;

const data = [
    {
        key: '1',
        name: 'Electronics',
        description: 'Devices like phones, laptops, etc.',
    },
    {
        key: '2',
        name: 'Books',
        description: 'Fiction, non-fiction, and educational books.',
    },
    {
        key: '3',
        name: 'Clothing',
        description: 'Apparel for men, women, and children.',
    },
];

const CategoryList = () => {
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
            render: () => (
                <Space size="middle">
                    <Button type="link">
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure you want to delete this category?"
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];


    return (
        <div>
            <Title level={2}>Category List</Title>
            <Button type="primary" style={{ marginBottom: 16 }}>
                Add Category
            </Button>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default CategoryList;
