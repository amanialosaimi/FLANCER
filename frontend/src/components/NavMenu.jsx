import React, { useState, useEffect } from "react";
import { Menu, Button } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import { checkStatus, logout } from "./ops/API";

function NavMenu(props) {
  const [current, setCurrent] = useState("home")
  const checkLoginStatus = () => {
    checkStatus().then((profile) => {
      if (profile.data.cookies) {
        props.auth(true)
      }
    })
  }

  useEffect(() => {
    checkLoginStatus()
  }, [])
  const handleClick = (e) => {
    //console.log("click ", e);
    setCurrent(e.key)
  };


  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="navMenu"
    >
      <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="latest"><Link to="/latest">Latest Project</Link></Menu.Item>
      <Menu.Item key="members"><Link to="/members">Members</Link></Menu.Item>
      <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
      <Menu.Item key="contact"><Link to="/contact">Contact Us</Link></Menu.Item>
      {props.authd ? <>
      <Button type="ghost"><Link to="/dashboard">Dashboard</Link></Button>
      <Button
        type="primary"
        onClick={() => { logout(); props.auth(false) }}
      >
        Logout
        </Button>
        </> : <Login auth={props.auth} />}
    </Menu>
  );
}

export default NavMenu;
