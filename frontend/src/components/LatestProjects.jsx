import "../App.css";
import React from "react";
import { ReactComponent as ProjectAvatar } from "../images/projectAvatar.svg";

import {
  Layout,
  Card,
  Avatar,
  Timeline,
  BackTop,
  Tooltip,
} from "antd";

import {
  FieldTimeOutlined,
  StarOutlined,
  CodeOutlined,
  UnlockOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import HeaderContent from './content/HeaderContent';


const { Content } = Layout;
const { Meta } = Card;
//backTop button style >> must be here otherwise won't work
const style = {
  height: 40,
  width: 90,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#006466",
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
};
function LatestProjects() {
  let qoute =  (<>" It always seems impossible until it's done  "{' '}
                <span className="qoute">Nelson Mandela</span></>)
  return (
    <div className="contContainer site-card-wrapper">
      <Layout style={{ padding: "0 24px 24px" }}>
        <HeaderContent title="LATEST PROJECT" h2={qoute} />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              {/* first project details section goes here */}
              {/* Adding a tooltip for icons only for the first section */}

              <Timeline>
                <Timeline.Item color="#4d194d">
                  <p>2 hours ago</p>
                  <Card
                    style={{ width: 1300, marginTop: 16 }}
                    actions={[
                      <Tooltip placement="top" title="Technologies">
                        <CodeOutlined />
                      </Tooltip>,
                      <Tooltip placement="top" title="Date">
                        <FieldTimeOutlined />
                      </Tooltip>,
                      <Tooltip placement="top" title="Stars">
                        <StarOutlined />
                      </Tooltip>,
                      <Tooltip placement="top" title="This project is public">
                        <UnlockOutlined />
                      </Tooltip>,
                      <Tooltip placement="top" title="Licence">
                        <SafetyCertificateOutlined />
                      </Tooltip>,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar size={85} src={<ProjectAvatar />} />}
                      title="FLANCER"
                      description="FLANCER is your destination of showing the case of your existing projects, repositories, and designs in detail as a Developer while you are able to share them with other developers,creating a new project along with detailed info, and read, update, delete existing project as well, with the ability to update the project status whether public or private. Flancer will also have visitors with a read-only privilege to give them the ability to read a public project's details."
                    />
                  </Card>
                </Timeline.Item>
                {/* End of first project details section goes here */}

                {/* second project details section goes here */}
                <Timeline.Item color="#006466">
                  <Card
                    style={{ width: 1300, marginTop: 16 }}
                    actions={[
                      <CodeOutlined />,
                      <FieldTimeOutlined />,
                      <StarOutlined />,
                      <UnlockOutlined />,
                      <SafetyCertificateOutlined />,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar size={85} src={<ProjectAvatar />} />}
                      title="Rick and Morty API"
                      description="FLANCER is your destination of showing the case of your existing projects, repositories, and designs in detail as a Developer while you are able to share them with other developers."
                    />
                  </Card>
                </Timeline.Item>
                {/* End of second project details section goes here */}

                {/* third project details section goes here */}
                <Timeline.Item color="#4d194d">
                  <Card
                    style={{ width: 1300, marginTop: 16 }}
                    actions={[
                      <CodeOutlined />,
                      <FieldTimeOutlined />,
                      <StarOutlined />,
                      <UnlockOutlined />,
                      <SafetyCertificateOutlined />,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar size={85} src={<ProjectAvatar />} />}
                      title="The Movies List"
                      description="FLANCER is your destination of showing the case of your existing projects, repositories, and designs in detail as a Developer while you are able to share them with other developers."
                    />
                  </Card>
                </Timeline.Item>
                {/* End of third project details section goes here */}
              </Timeline>
            </Content>
          </Layout>
        </Content>
        <BackTop>
          <div style={style}>Go Up</div>
        </BackTop>
      </Layout>
    </div>
  );
}

export default LatestProjects;
