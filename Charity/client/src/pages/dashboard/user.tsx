import { Button, Table, Tag } from 'antd';

const UserList = () => {
    const handleLockAccount = (record: { isActive?: unknown; name?: unknown; }) => {
        // Toggle the isActive status
        console.log(`Toggling account status for user: ${record.name}`);
        // Add your update logic here, e.g., making an API call to lock/unlock the user account
    };

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
            render: (role: string) => (
                <Tag color={role === 'admin' ? 'volcano' : 'geekblue'}>{role.toUpperCase()}</Tag>
            ),
        },
        {
            title: 'Active Status',
            dataIndex: 'isActive',
            key: 'isActive',
            render: (isActive: unknown) => (
                <Tag color={isActive ? 'green' : 'red'}>
                    {isActive ? 'Active' : 'Inactive'}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_text: unknown, record: { isActive: unknown; }) => (
                <Button
                    onClick={() => handleLockAccount(record)}
                    style={{
                        backgroundColor: record.isActive ? 'red' : 'blue',
                        color: 'white',
                        border: 'none',
                    }}
                >
                    {record.isActive ? 'Lock Account' : 'Unlock Account'}
                </Button>
            ),
        },
    ];

    // Sample data
    const data = [
        {
            key: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
            nickname: 'johnny',
            role: 'member',
            isActive: true,
        },
        {
            key: '2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '0987654321',
            nickname: 'janeS',
            role: 'admin',
            isActive: false,
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default UserList;
