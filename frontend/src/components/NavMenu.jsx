import React from "react";
import { Menu } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import Login from "./Login";
// import Login from "./Login";

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
        <Menu.Item key="profile"><Link to="/dashboard">Dashboard</Link></Menu.Item>
        <Menu.Item key="latest"><Link to="/latest">Latest Project</Link></Menu.Item>
        <Menu.Item key="developers">Developers</Menu.Item>
        <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="contact">Contact Us</Menu.Item>
        <Login/>
      </Menu>
      
    );
  }
}

export default NavMenu;