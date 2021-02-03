import React, {useState} from "react"
import { Layout, Row, Col, Typography, Form, Input, Button, Result } from 'antd';
import Moment from 'react-moment'
import { updateProfile } from '../ops/API'

const { Title } = Typography;

function DeveloperProfile(props) {
    const [form] = Form.useForm()
    const [status, setStatus] = useState()
    const onFinish = async (values) => {
        if (props.profile?.user) {
            await updateProfile(props.profile.user._id, values)
                .then((result) => {
                    form.resetFields();
                    setStatus(result.data.message)     
                })
                .then(()=>{
                props.status()
                setTimeout(()=> setStatus(undefined),2000)
                })
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Layout style={{ marginLeft: 200 }}>
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={1}>Profile</Title></Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={3}>Welcome {props.profile?.user.username}!</Title></Col>
                <br />
                <Col span={10} style={{ margin: '15px 28px 0' }}><Title level={5}>Registerd since <Moment fromNow>{new Date(props.profile?.user.createdAt * 1000)}</Moment> </Title></Col>
            </Row>
            <Row style={{ marginTop: 0 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}>
                    <Title level={5}>{`(${props.profile?.user.email}) `}</Title>
                    <br />
                </Col>
                <br />
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={5}>Last Login <Moment fromNow>{new Date(props.profile?.user.lastLogin)}</Moment> </Title></Col>
            </Row>
            <Row style={{ margin: "50px 30px" }}>
                <Form
                    form={form}
                    layout={'inline'}
                    initialValues={{
                        email: props.profile?.email,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label="E-mail" name="email">
                        <Input placeholder="Change your email" />
                    </Form.Item>
                    <Form.Item label="Change Password" name="password">
                        <Input placeholder="password" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">Update</Button>
                    </Form.Item>
                </Form>
            </Row>
            <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                {status ? <Result
                    status="success"
                    title=""
                    subTitle={status}
                /> : ""}
            </Row>
        </Layout>
    )
}

export default DeveloperProfile

