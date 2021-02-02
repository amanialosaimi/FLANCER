import React, { Component } from "react";
import { Form, Input, Button, Divider } from 'antd';
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
      <div className="contContainer site-card-wrapper">

        <Divider orientation="center" type="horizontal">
          <h1 className="large-font contact-title">
            <b>Contact Us</b>
          </h1>

        </Divider>
        <div className='contact-container'>
          <Form
            {...layout}
            name="basic"

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={<h4><b>First Name</b></h4>}
              name="Firstname"
              rules={[{ required: true, message: 'Please input your firstname!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<h4><b>Last Name</b></h4>}
              name="Lastname"
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
              <TextArea placeholder='Write something..' rows={4} />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" style={style}>
                Send
            </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Contact;


