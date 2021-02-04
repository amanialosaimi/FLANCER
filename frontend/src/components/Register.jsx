import React, { Component } from "react";
import { Form, Input, Button, Divider } from 'antd';
import { API } from './ops/API'
import '../App.css'
const style = {
  height: 40,
  width: 100,
  lineHeight: "30px",
  borderRadius: 4,
  backgroundColor: "#fff",
  color: "#006466",
  textAlign: "center",
  fontSize: 14,
};
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sucsses: false
    }
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = async (values) => {
      await API.register(values)
        .then((response) => {
          this.setState({ sucsses: response })
        }).catch((err) => {
          console.log(err)
        })
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="contContainer site-card-wrapper">
        <Divider orientation="center" type="horizontal">
          <h1 className="large-font contact-title">
            <b>Register</b>
          </h1>

        </Divider>
        <div className='register-container'>
          <h1 className="contact-title">Be one of our creatives!</h1>
          <h4 className="contact-title">{this.state.sucsses ? this.state.sucsses : ""}</h4><br />
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={<h4><b>Username</b></h4>}
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item

              label={<h4><b>First Name</b></h4>}
              name="firstname"
              rules={[{ required: true, message: 'Please input your firstname!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<h4><b>Last Name</b></h4>}
              name="lastname"
              rules={[{ required: true, message: 'Please input your Lastname!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<h4><b>Email</b></h4>}
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<h4><b>Password</b></h4>}
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label={<h4><b>Re-enter Password</b></h4>}
              name="confirm-password"
              rules={[{ required: true, message: 'Re-enter Password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" style={style}>
                Register
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Register;