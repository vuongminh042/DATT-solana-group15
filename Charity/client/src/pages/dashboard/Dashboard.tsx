import React from 'react';
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
    TeamOutlined,
    DollarOutlined,
    SettingOutlined,
    FileTextOutlined,
    FundOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

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
        key: 'sub1',
        icon: <FundOutlined />,
        label: 'Campaign Management',
        children: [
            { key: '1', label: 'View All Campaigns' },
            { key: '2', label: 'Add New Campaign' },
            { key: '3', label: 'Edit Campaign' },
            { key: '4', label: 'Campaign Progress' },
        ],
    },
    {
        key: 'sub2',
        icon: <UserOutlined />,
        label: 'User Management',
        children: [
            { key: '5', label: 'User List' },
        ],
    },
    {
        key: 'sub3',
        icon: <DollarOutlined />,
        label: 'Donation Management',
        children: [
            { key: '6', label: 'All Donations' },
            { key: '7', label: 'Verify Donations' },
            { key: '8', label: 'Payment Methods' },
            { key: '9', label: 'Transaction Verification' },
        ],
    },
    {
        key: 'sub4',
        icon: <FileTextOutlined />,
        label: 'News & Blog Management',
        children: [
            { key: '10', label: 'All Posts' },
            { key: '11', label: 'Create Post' },
            { key: '12', label: 'Edit Post' },
        ],
    },
    {
        key: 'sub5',
        icon: <TeamOutlined />,
        label: 'Volunteer Management',
        children: [
            { key: '13', label: 'Volunteer List' },
            { key: '14', label: 'Assign Tasks' },
            { key: '15', label: 'Volunteer Contributions' },
        ],
    },
    {
        key: 'sub6',
        icon: <NotificationOutlined />,
        label: 'Feedback & Reviews',
        children: [
            { key: '16', label: 'View Feedback' },
            { key: '17', label: 'Approve Reviews' },
        ],
    },
    {
        key: 'sub7',
        icon: <SettingOutlined />,
        label: 'Settings & Privacy',
        children: [
            { key: '18', label: 'General Settings' },
            { key: '19', label: 'Privacy Policies' },
        ],
    },
    {
        key: 'sub8',
        icon: <LaptopOutlined />,
        label: 'Financial Reports',
        children: [
            { key: '20', label: 'Financial Summary' },
            { key: '21', label: 'Periodic Reports' },
        ],
    },
    {
        key: 'sub9',
        icon: <NotificationOutlined />,
        label: 'Notifications Settings',
        children: [
            { key: '22', label: 'Manage Notifications' },
            { key: '23', label: 'Email/SMS Configurations' },
        ],
    },
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
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {/* Content area for each selected option */}
                        Dashboard Content
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
