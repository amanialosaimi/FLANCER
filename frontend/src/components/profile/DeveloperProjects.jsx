import DeveloperTable from './DeveloperTable';
import ProjectForm from './ProjectForm';
import { Typography, Layout, Card, Col, Row, Divider } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;
const { Content, Footer } = Layout;
export default function DeveloperProjects(props) {
    return (
        <Layout style={{ marginLeft: 200 }}>
            {/* <Header className="site-layout-background" style={{ padding: 0 }} > HEADER TITLE </Header> */}
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={1}>Projects</Title></Col>
                <Col><ProjectForm status={props.status} /></Col>
            </Row>
            <Row style={{ marginTop: 30, marginLeft: 28 }}>
                <Col span={8}>
                    <Card title="Total Projects" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{props.profile?.projects.length}</Title></Card>
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
                    <DeveloperTable projects={props.profile?.projects} />
                </div>
            </Content>
        </Layout>
    )
}
