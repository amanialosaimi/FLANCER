import { Layout, Row, Col, Typography } from 'antd';

const { Title } = Typography;

function DeveloperProfile(props) {
    console.log(props.profile)
    return (
        <Layout style={{ marginLeft: 200 }}>
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={1}>Profile</Title></Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={3}>Welcome {props.profile?.user.username}!</Title></Col>
                <br />
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={5}>Registerd since {`${new Date(props.profile?.user.createdAt * 1000)}`}</Title></Col>
            </Row>
        </Layout>
    )
}

export default DeveloperProfile