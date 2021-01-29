import React from "react";
import NavMenu from "./NavMenu";
import FlancerLogo from "./Header";
import FirstBlock from "./content/FirstBlock";
import MiddleBlock from "./content/MiddleBlock"
import LastBlockImg from "./content/LastBlock"
import { Row, Col } from "antd";
function Home() {
  return (
    <div>
      <Row>
        <Col flex="100px">
          <FlancerLogo />
        </Col>
        <Col flex="auto">
          <NavMenu />
        </Col>
      </Row>
      <Row>
        <Col >
          <FirstBlock />
          <MiddleBlock/>
          <LastBlockImg/>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
