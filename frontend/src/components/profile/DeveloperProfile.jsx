import React, { useState, useEffect } from "react"
import { Layout, Row, Col, Typography, Form, Input, Button, Result, Divider } from 'antd';
import Moment from 'react-moment'
import { API } from '../ops/API'
const style = {
    height: 40,
    width: 320,
    lineHeight: "30px",
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "#006466",
    textAlign: "center",
    fontSize: 14,
};
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const { Title } = Typography;
const tailLayout = {
    wrapperCol: { offset: 0, span: 20 },
};
function DeveloperProfile(props) {
    const [form] = Form.useForm()
    const [status, setStatus] = useState()

    // eslint-disable-next-liness
    useEffect(() => {
        props.status()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    const onFinish = async (values) => {
        if (props.profile?.user) {
            await API.updateProfile(props.profile.user._id, values)
                .then((result) => {
                    form.resetFields();
                    setStatus(result.data.message)
                })
                .then(() => {
                    props.status()
                    setTimeout(() => setStatus(undefined), 2000)
                })
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row style={{ marginTop: 100 }}>
            <div className='setting contContainer' >
                <Divider orientation="center" type="horizontal">
                    <h1 className="large-font">
                        <b>Profile</b>
                    </h1>
                </Divider>
                <Layout>
                    <div className="profile-items">
                        <Row style={{ marginTop: 20 }}>

                            <Col span={40} style={{ margin: '0 28px 0' }}><Title level={3}>Welcome {props.profile?.user.username}!</Title></Col>
                            <br />
                            <Col span={40} style={{ margin: '15px 28px 0' }}><Title level={5}>Registerd since <Moment fromNow>{new Date(props.profile?.user.createdAt * 1000)}</Moment> </Title></Col>
                        </Row>
                        <Row style={{ marginTop: 0 }}>
                            <Col span={40} style={{ margin: '15px 28px 0' }}>
                                <Title level={5}>Your Current Email: {`(${props.profile?.user.email}) `}</Title>
                                <br />
                            </Col>
                            <br />
                            <Col span={40} style={{ margin: '0 28px 0' }}><Title level={5}>Last Login <Moment fromNow>{new Date(props.profile?.user.lastLogin)}</Moment> </Title></Col>
                        </Row>
                        <Row style={{ margin: "50px 30px" }}>
                            <div className='profile-form'>
                                <Form
                                    {...layout}
                                    initialValues={{
                                        email: props.profile?.email,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}


                                >
                                    <Form.Item
                                        label={<h4><b>Email</b></h4>}
                                        name="email"
                                        rules={[{ required: true, message: 'Enter new email address!' }]}

                                    >
                                        <Input placeholder="Change your email" />
                                    </Form.Item>

                                    <Form.Item
                                        label={<h4><b>Password</b></h4>}
                                        name="password"
                                    >
                                        <Input placeholder="Change password" />
                                    </Form.Item>



                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit" style={style}>
                                            Save
            </Button>
                                    </Form.Item>
                                </Form></div>
                        </Row>
                        <Row style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
                            {status ? <Result
                                status="success"
                                title=""
                                subTitle={status}
                            /> : ""}

                        </Row>
                    </div>
                </Layout>
            </div>
        </Row>
    )
}

export default DeveloperProfile

