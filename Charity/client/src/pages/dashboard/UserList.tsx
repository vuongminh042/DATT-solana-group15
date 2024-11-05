import { Button, Popconfirm, Table, Typography } from 'antd';

const { Title } = Typography;

const data = [
    {
        key: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '0123456789',
        nickname: 'johnny',
        role: 'member',
        isActive: true,
    },
    {
        key: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '0987654321',
        nickname: 'janey',
        role: 'admin',
        isActive: false,
    },
];

const UserList = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Nickname',
            dataIndex: 'nickname',
            key: 'nickname',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Active',
            dataIndex: 'isActive',
            key: 'isActive',
            render: (text) => (text ? 'On' : 'Off'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure you want to lock this account?"
                    onConfirm={() => handleLockAccount(record.key)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary" danger>
                        Lock Account
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    const handleLockAccount = (key) => {
        // Logic để khóa tài khoản người dùng dựa trên key
        console.log(`Lock account for user with key: ${key}`);
        // Thêm mã để gọi API hoặc xử lý logic khóa tài khoản ở đây
    };

    return (
        <div>
            <Title level={2}>User List</Title>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default UserList;
