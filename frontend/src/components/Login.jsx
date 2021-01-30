import "../App.css";
import React, { Component } from "react";
import { Button, Modal, Input, Space } from "antd";
// import { ReactComponent as LoginBg } from "../images/LoginBg.svg";

import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
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
export default class Login extends Component {
  state = {
    modal1Visible: false,
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <>
        <Button
          style={style}
          type="primary"
          onClick={() => this.setModalVisible(true)}
        >
          Login
        </Button>
        
        <Modal
          title="Welcome Back!"
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          
        //   style={{ backgroundImage: `url(${LoginBg})`, backgroundRepeat: 'no-repeat',
        //   width:'250px', height:'300px'}}
        >
          <Space direction="vertical">
            <Input placeholder="Type your username" prefix={<UserOutlined />} />
          </Space>
          <br />
          <br />
          <Space direction="vertical">
            <Input.Password
              placeholder="Type your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
        </Modal>
        
      </>
    );
  }
}
