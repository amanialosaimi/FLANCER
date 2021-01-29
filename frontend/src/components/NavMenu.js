import React from "react";
import { Menu } from "antd";
import { Row, Col } from "antd";
import "../App.css";

class NavMenu extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="alipay1">Home</Menu.Item>
        <Menu.Item key="alipay2">Latest Project</Menu.Item>
        <Menu.Item key="setting:3">Deveolopers</Menu.Item>
        <Menu.Item key="setting:4">About</Menu.Item>
        <Menu.Item key="setting:5">Contact Us</Menu.Item>
      </Menu>
    );
  }
}

export default NavMenu;
