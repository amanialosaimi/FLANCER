import "../App.css";
import React, { useState } from "react";
import { Form, Button, Modal, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { ReactComponent as LoginBg } from "../images/LoginBg.svg";
import { login } from "./ops/API"

const style = {
  height: 40,
  width: 90,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#006466",
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
  padding: 0,
};
const LoginCollection = ({ visible, onLogin, onCancel }) => {

  const [form] = Form.useForm();

  return (<Modal
    title="Welcome Back!"
    centered
    visible={visible}
    onOk={() => form
      .validateFields()
      .then((values) => {
        console.log(values)
        form.resetFields();
        onLogin(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      })
    }
    onCancel={onCancel}
    htmlType="submit"

  //   style={{ backgroundImage: `url(${LoginBg})`, backgroundRepeat: 'no-repeat',
  //   width:'250px', height:'300px'}}
  >
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item><a className="login-form-forgot" href="#">Forgot password</a></Form.Item>
      <Form.Item>
        <a href="/register">Register now!</a>
      </Form.Item>
    </Form>
  </Modal>)
}
export default function Login(props) {
  const [visible, setVisible] = useState(false)

  const onLogin = async (values) => {
    console.log('Received values of form: ', values);
    try {
      await login(values)
      setVisible(false)
      props.auth(true)

    } catch (err) {
      console.log(err)
    }

  };

  return (
    <>
      <Button
        style={style}
        type="primary"
        onClick={() => setVisible(true)}
      >
        Login
        </Button>

      <LoginCollection
        visible={visible}
        onLogin={onLogin}
        onCancel={() => {
          setVisible(false);
        }}
      />

    </>
  )
}
