import React, { useEffect } from "react";
import Moment from 'react-moment'
import HeaderContent from './HeaderContent';
import { ReactComponent as ProjectAvatar } from "../../images/projectAvatar.svg";
import "../../App.css";

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
function LatestProjects(props) {
  useEffect(() => {
    props.status()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const ProjectSort = props.profile?.projects.sort((a, b) => new Date(b.date) - new Date(a.date))
  const ProjectPreview = ({ content }) => {
    return (
      <Timeline.Item color="#4d194d">
        <p><Moment fromNow>{content.date}</Moment></p>
        <Card
          style={{ width: 1300, marginTop: 16 }}
          actions={[
            <Tooltip placement="top" title={`Technologies: ${content?.technology}`}>
              <CodeOutlined />
            </Tooltip>,
            <Tooltip placement="top" title={<>Created <Moment Format="YYYY-MM-DD">{content?.date}</Moment></>}>
              <FieldTimeOutlined />
            </Tooltip>,
            <Tooltip placement="top" title={<>Project Preview <a href={content?.url ? content.url : '#'}>Demo</a></>}>
              <StarOutlined />
            </Tooltip>,
            <Tooltip placement="top" title={`${content?.isVisible ? "Public" : "Private"}`}>
              <UnlockOutlined />
            </Tooltip>,
            <Tooltip placement="top" title={`${content?.licence}`}>
              <SafetyCertificateOutlined />
            </Tooltip>,
          ]}
        >
          <Meta
            avatar={<Avatar size={85} src={<ProjectAvatar />} />}
            title={`${content?.title}`}
            description={`${content?.description}`}
          />
        </Card>
      </Timeline.Item>
    )
  }
  let qoute = (<>" It always seems impossible until it's done  "{' '}
    <span className="qoute">Nelson Mandela</span></>)
  return (
    <div className="contContainer site-card-wrapper">
      <Layout style={{ padding: "0 24px 24px" }}>
        <HeaderContent title="LATEST PROJECTS" h2={qoute} />
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

              <Timeline>
                {/* Start of User Timeline */}
                {ProjectSort?.length > 0 ?
                  ProjectSort?.map((project, index) => {
                    return (<ProjectPreview key={index + 1} content={project} />)
                  }) : <><h3 style={{ textAlign: 'center' }}><b>Your Projects' Timeline Will Load Here</b></h3></>}
                {/* End of Timeline */}
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
