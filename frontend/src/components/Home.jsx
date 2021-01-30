import FirstBlock from "./content/FirstBlock";
import MiddleBlock from "./content/MiddleBlock";
import LastBlockImg from "./content/LastBlock";
import { Row, Col } from "antd";
function Home() {
  return (
    <div>
      <Row>
        <Col>
          <FirstBlock />
          <MiddleBlock />
          <LastBlockImg />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
