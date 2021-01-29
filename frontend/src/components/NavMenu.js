import React from "react";
import { Menu } from "antd";
import "../App.css";
import { Link } from "react-router-dom";

class NavMenu extends React.Component {
  state = {
    current: "home",
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
        <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="profile"><Link to="/profile">Profile</Link></Menu.Item>
        <Menu.Item key="latest">Latest Project</Menu.Item>
        <Menu.Item key="developers">Developers</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact Us</Menu.Item>
      </Menu>
    );
  }
}

export default NavMenu;
