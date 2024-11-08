import { LockOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Table, Typography, message } from 'antd';
import { useEffect, useState } from 'react';

const { Title } = Typography;

const UserList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setLoading(true);
        fetch("http://localhost:8000/api/auth")
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setData(result.data.map((item) => ({ key: item._id, ...item })));
                } else {
                    message.error(result.message || "Failed to load users");
                }
                setLoading(false);
            })
            .catch((error) => {
                message.error("Failed to load users");
                console.error("Error:", error);
                setLoading(false);
            });
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
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary" danger>
                        <LockOutlined />
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <div>
            <Title level={2}>User List</Title>
            <Table columns={columns} dataSource={data} loading={loading} />
        </div>
    );
};

export default UserList;
