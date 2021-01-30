import { Menu, Layout } from 'antd';
import FlancerLogo from "../Header"
import { Link } from "react-router-dom";
import {
    UserOutlined,
    TrophyOutlined,
    ShareAltOutlined,
    TeamOutlined,
    ToolOutlined,
    AppstoreOutlined,
    RollbackOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

export default function DeveloperSidebar() {
    const { Sider } = Layout;
    return (
        <Layout>
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
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}><Link to="/dashboard">Dashboard</Link></Menu.Item>
                    <Menu.Item key="2" icon={<TrophyOutlined />}><Link to="/myprojects">My Projects</Link></Menu.Item>
                    <Menu.Item key="3" icon={<ShareAltOutlined />}><Link to="/profile/publication">Publication</Link></Menu.Item>
                    <Menu.Item key="4" icon={<TeamOutlined />}>Teams</Menu.Item>
                    <Menu.Item key="5" icon={<ToolOutlined />}><Link to="/profile/settings">Settings</Link></Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}><Link to="/contact">Support</Link></Menu.Item>
                    <Menu.Item key="7" icon={<RollbackOutlined />}><Link to="/">Back To Home</Link></Menu.Item>
                    <Menu.Item key="8" icon={<LogoutOutlined />}><Link to="/logout">Log Out</Link></Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    )
}
