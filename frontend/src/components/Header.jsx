import React from "react";
import NavMenu from "./NavMenu";
import { Row, Col } from "antd"
import { ReactComponent as FlancerLogo } from "../images/flancerLogo_1.svg";
function Header() {
  return (
    <>
      <Row>
        <Col style={{height : "50px"}}>
          <FlancerLogo />
        </Col>
        <Col style={{height : "50px"}}><NavMenu /></Col>
      </Row>

    </>
  );
}

export default Header;
