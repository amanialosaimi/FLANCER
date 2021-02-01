import { Layout, Row, Col, Typography } from 'antd';

const { Title } = Typography;

function DeveloperPublication() {
    return (
        <Layout style={{ marginLeft: 200 }}>
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={1}>Publication</Title></Col>
            </Row>
        </Layout>
    )
}

export default DeveloperPublication
