import {
    FileTextOutlined,
    UserOutlined,
    TagsOutlined // Import an icon for the Category section
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet

const { Header, Content, Footer, Sider } = Layout;

// Define top navigation items
const items1: MenuProps['items'] = [
    { key: '1', label: 'Dashboard' },
    { key: '2', label: 'Campaigns' },
    { key: '3', label: 'Users' }
];

// Define sidebar navigation items with detailed options
const items2: MenuProps['items'] = [
    {
        key: 'sub2',
        icon: <UserOutlined />,
        label: 'User Management',
        children: [
            { key: '5', label: <Link to="user-list">User List</Link> },
        ],
    },
    {
        key: 'sub4',
        icon: <FileTextOutlined />,
        label: 'News & Blog Management',
        children: [
            { key: '10', label: <Link to='post-list'>All Posts</Link> },
            { key: '11', label: <Link to='post-add'>Create Post</Link> },
        ],
    },
    {
        key: 'sub5',
        icon: <TagsOutlined />, // Icon for Category
        label: 'Category Management',
        children: [
            { key: '13', label: <Link to="category-list">All Categories</Link> },
            { key: '14', label: <Link to="category-add">Add Category</Link> }
        ],
    }
];

const Dashboard: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items1}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Charity Management</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
                >
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub2']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {/* Use Outlet to render child routes here */}
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Charity Dashboard ©{new Date().getFullYear()} Created for Charity Management
            </Footer>
        </Layout>
    );
};

export default Dashboard;
