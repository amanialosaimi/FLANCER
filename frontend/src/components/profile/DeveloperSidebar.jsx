import { Menu, Layout, Badge } from 'antd';
import { ReactComponent as FlancerLogo } from "../../images/flancerLogo_1.svg";
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
                    {/* <Menu.Item key="0" icon={<UserOutlined />}><Link to="/dashboard">Dashboard</Link></Menu.Item> */}
                    <Menu.Item key="1" icon={<UserOutlined />}><Link to="/dashboard/profile">Profile</Link></Menu.Item>
                    <Menu.Item key="2" icon={<TrophyOutlined />}><Link to="/dashboard/projects">Projects</Link></Menu.Item>
                    <Menu.Item key="3" icon={<ShareAltOutlined />}><Link to="/dashboard/publication">Publication</Link></Menu.Item>
                    <Menu.Item key="4" icon={<TeamOutlined />}>Teams <Badge count={"Soon"} /></Menu.Item>
                    <Menu.Item key="5" icon={<ToolOutlined />}><Link to="/dashboard/settings">Settings</Link></Menu.Item>
                    <Menu.Item key="6" icon={<RollbackOutlined />}><Link to="/">Back To Home</Link></Menu.Item>
                    <Menu.Item key="7" icon={<LogoutOutlined />}><Link to="/logout">Log Out</Link></Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    )
}
