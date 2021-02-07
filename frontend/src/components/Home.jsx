import WhyUS from "./content/WhyUS";
import AIMS from "./content/AIMS";
import TheTeam from "./content/TheTeam";
import { Row, Col } from "antd";
function Home() {
  return (
    <div className="">
      <Row>
        <Col>
          <WhyUS />
          <AIMS />
          <TheTeam />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
