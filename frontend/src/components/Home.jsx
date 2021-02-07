import WhyUS from "./content/WhyUS";
import AIMS from "./content/AIMS";
import TheTeam from "./content/TheTeam";
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
