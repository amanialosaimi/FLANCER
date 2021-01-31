import React, { Component } from "react";
import { Form, Input, Button,  } from 'antd';
import '../App.css'
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const onFinish = (values) => {
      console.log('Success:', values);
    };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
      <div>
        
        <div className='register-container'>
        <h1 className="contact-title">Register</h1>
         <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Firstname"
        name="Firstname"
        rules={[{ required: true, message: 'Please input your firstname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="Lastname"
        rules={[{ required: true, message: 'Please input your Lastname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
     
      <Form.Item
        label="Re-enter Password"
        name="Re-enter Password"
        rules={[{ required: true, message: 'Re-enter Password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
    </div>  
    </div>
    );
  }
}
export default Register;