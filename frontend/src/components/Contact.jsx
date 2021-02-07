import React, { Component } from "react";
import { Form, Input, Button, Layout } from 'antd';
import HeaderContent from './content/HeaderContent';

import { API } from './ops/API'
import '../App.css'
const { TextArea } = Input;
const style = {
  height: 40,
  width: 90,
  lineHeight: "30px",
  borderRadius: 4,
  backgroundColor: "#fff",
  color: "#006466",
  textAlign: "center",
  fontSize: 14,
};
class Contact extends Component {
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = (values) => {
      API.postContact(values).then((result) => console.log("Message Saved: ", result))
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="contContainer site-card-wrapper">
        <Layout style={{ padding: "0 24px 24px" }} className="site-layout">
          <HeaderContent title={'CONTACT US'} h2={"Let's keep in touch!"} />
          <div className='contact-container'>
            <Form
              {...layout}
              name="basic"

              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
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

              <Form.Item {...tailLayout} >
                <TextArea placeholder='Write something..' rows={4}
                  label="Messagee"
                  name="message"
                />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" style={style}>
                  Send
            </Button>
              </Form.Item>
            </Form>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Contact;


