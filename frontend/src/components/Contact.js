  import React, { Component } from "react";
    import { Form, Input, Button,  } from 'antd';
    import '../App.css'
    const { TextArea } = Input;
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
          <div>
            <h1>Contact Us</h1>
            <div className='container'>
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
          
          <Form.Item {...tailLayout} >
          <TextArea  placeholder='Write something..'  rows={4} />
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
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
    
    
    