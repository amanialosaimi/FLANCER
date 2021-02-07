import React, { useState } from "react";
import { Menu, Button, Space } from "antd";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import Login from "./Login";
import { API } from "./ops/API";
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
  marginRight: 8,
};
function NavMenu(props) {
  const [current, setCurrent] = useState("home")
  const history = useHistory();

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
        <Space size={[8, 16]} wrap><Button type="ghost" style={style}><Link to="/dashboard">Dashboard</Link></Button></Space>
        <Space size={[8, 16]} wrap>
          <Button
            type="primary"
            style={style}
            onClick={async () => { await API.logout().then((profile) => { props.status(); props.auth(false); history.push('/'); }) }}
          >
            Logout
        </Button></Space>
      </> : <Login auth={props.auth} status={props.status} redirect={history.push} />}
    </Menu>
  );
}

export default NavMenu;
