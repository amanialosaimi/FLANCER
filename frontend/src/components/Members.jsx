import "../App.css";
import React from "react";
import { ReactComponent as Membership } from "../images/Membership.svg";
import {
  Layout,
  Card,
  Space,
  Avatar,
} from "antd";
import HeaderContent from './content/HeaderContent';

const { Content } = Layout;
const { Meta } = Card;
const gridStyle = {
  width: "300px",
  textAlign: "center",
  marginTop: 16
};
function Members() {
  return (
    <div className="contContainer site-card-wrapper">
      <Layout style={{ padding: "0 24px 24px" }} className="site-layout">
      <HeaderContent title={'MEMBERS'} />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Layout className="site-layout members">
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Space>
                <Card.Grid
                  style={gridStyle}
                >
                  <Meta
                    avatar={<Avatar size={95} src={<Membership />} />}
                    title={<h4><b>Abdulaziz Alfayaa</b></h4>}
                    description="Full-Stack Software Engineer"
                  />
                </Card.Grid>
                <Card.Grid
                  style={gridStyle}

                
                >
                  <Meta
                    avatar={<Avatar size={95} src={<Membership />} />}
                    title={<h4><b>Abeer Albawardi</b></h4>}
                    description="Full-Stack Software Engineer"
                    
                    
                  />
                </Card.Grid>
                <Card.Grid
                  style={gridStyle}

                >
                  <Meta
                    avatar={<Avatar size={95} src={<Membership />} />}
                    title= {<h4><b>Amani Alosaimi</b></h4>}
                    description="Full-Stack Software Engineer"
                  />
                </Card.Grid>
                <Card.Grid
                  style={gridStyle}

                >
                  <Meta
                    avatar={<Avatar size={95} src={<Membership />} />}
                    title= {<h4><b>Fahad Alsaedi</b></h4>}
                    description="Full-Stack Software Engineer"
                  />
                </Card.Grid>
              </Space>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default Members;
