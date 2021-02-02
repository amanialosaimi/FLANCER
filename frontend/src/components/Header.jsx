import React from "react";
import NavMenu from "./NavMenu";
import { Row, Col } from "antd"
import { ReactComponent as FlancerLogo } from "../images/flancerLogo_1.svg";
function Header(props) {
  return (
    <>
      <Row>
        <Col style={{height : "50px"}}>
          <FlancerLogo />
        </Col>
        <Col style={{height : "50px"}}><NavMenu authd={props.authd} auth={props.auth} /></Col>
      </Row>

    </>
  );
}

export default Header;
