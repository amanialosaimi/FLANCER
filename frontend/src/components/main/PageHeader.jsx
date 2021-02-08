import React from "react";
import NavMenu from "./NavMenu";
import { Row, Col, Space } from "antd"
import { ReactComponent as FlancerLogo } from "../../images/flancerLogo_1.svg";

export default function PageHeader(props) {
  return (
    <>
      <Row>
        <Space size={[600, 16]}>
          <Col style={{ height: "50px" }}>
            <FlancerLogo />
          </Col>

          <Col style={{ height: "50px" }}><NavMenu authd={props.authd} auth={props.auth} status={props.status} /></Col>
        </Space>
      </Row>
    </>
  );
}
