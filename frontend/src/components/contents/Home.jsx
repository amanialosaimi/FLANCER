import WhyUS from "./WhyUS";
import AIMS from "./AIMS";
import TheTeam from "./TheTeam";
import { Row, Col } from "antd";
function Home() {
  return (
    <>
      <Row>
        <Col>
          <WhyUS />
          <AIMS />
          <TheTeam />
        </Col>
      </Row>
    </>
  );
}

export default Home;
