import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Layout, Menu, Card, Col, Row } from 'antd';
import {
    AppstoreOutlined,
    TrophyOutlined,
    ShareAltOutlined,
    TeamOutlined,
    UserOutlined,
    LogoutOutlined,
    ToolOutlined,
    RollbackOutlined
} from '@ant-design/icons';
import DeveloperTable from './DeveloperTable';
import FlancerLogo from "../Header"

const { Header, Content, Footer, Sider } = Layout;

export default function DeveloperProfile() {
    const { Title } = Typography;
    return (<Layout>
        <Sider theme="light"
            style={{
                overflow: 'auto',
                height: '100vwh',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                padding: 0
            }}
        >
            <div className="logo" />
            <FlancerLogo />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
                <Menu.Item key="1" icon={<UserOutlined />}>My Account</Menu.Item>
                <Menu.Item key="2" icon={<TrophyOutlined />}>My Projects</Menu.Item>
                <Menu.Item key="3" icon={<ShareAltOutlined />}>Publication</Menu.Item>
                <Menu.Item key="4" icon={<TeamOutlined />}>Teams</Menu.Item>
                <Menu.Item key="5" icon={<ToolOutlined />}>Settings</Menu.Item>
                <Menu.Item key="6" icon={<AppstoreOutlined />}>Support</Menu.Item>
                <Menu.Item key="7" icon={<RollbackOutlined />}>Back To Home</Menu.Item>
                <Menu.Item key="8" icon={<LogoutOutlined />}>Log Out</Menu.Item>
            </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
            {/* <Header className="site-layout-background" style={{ padding: 0 }} > HEADER TITLE </Header> */}
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={1}>Developer Name</Title></Col>
            </Row>
            <Row style={{ marginTop: 30, marginLeft: 28 }}>
                <Col span={8}>
                    <Card title="Total Projects" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>0</Title></Card>
                </Col>
                <Col span={8}>
                    <Card title="Total Repos" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>0</Title></Card>
                </Col>
                <Col span={7}>
                    <Card title="Total Stars" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>0</Title></Card>
                </Col>
            </Row>
            <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
                <div className="project-layout" style={{ padding: 16, marginRight: 10, textAlign: 'center' }}>
                    <DeveloperTable />
                </div>
            </Content>
            <Footer style={{ position: "fixed", bottom: "0", width: "100%", textAlign: 'left' }}>© 2021 Created by Flancer Team</Footer>
        </Layout>
    </Layout>)
}