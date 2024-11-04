import {
    BarChartOutlined,
    CommentOutlined,
    FileTextOutlined,
    FundProjectionScreenOutlined,
    SettingOutlined,
    TeamOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;


const items2: MenuProps['items'] = [
    {
        key: '1',
        icon: <UserAddOutlined />,
        label: <Link to="user-list">Quản lý Người dùng</Link>,
    },
    {
        key: '2',
        icon: <FundProjectionScreenOutlined />,
        label: <Link to="">Quản lý Chiến dịch</Link>,
    },
    {
        key: '3',
        icon: <CommentOutlined />,
        label: <Link to="">Quản lý Quyên góp</Link>,
    },
    {
        key: '4',
        icon: <FileTextOutlined />,
        label: <Link to="post-list">Quản lý Tin tức & Bài viết</Link>,
    },
    {
        key: '5',
        icon: <TeamOutlined />,
        label: <Link to="">Quản lý Tình nguyện viên</Link>,
    },
    {
        key: '6',
        icon: <CommentOutlined />,
        label: <Link to="">Quản lý Phản hồi và Đánh giá</Link>,
    },
    {
        key: '7',
        icon: <SettingOutlined />,
        label: <Link to="">Cài đặt và Quản lý Quyền riêng tư</Link>,
    },
    {
        key: '8',
        icon: <BarChartOutlined />,
        label: <Link to="">Báo cáo Tài chính</Link>,
    },
    {
        key: '9',
        icon: <SettingOutlined />,
        label: <Link to="">Cấu hình Thông báo</Link>,
    },
];

const Dashboard: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#001529' }}>
                <div className="demo-logo" style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>ADMIN</div>

            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
                >
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet /> {/* Thêm Outlet tại đây */}
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default Dashboard;
