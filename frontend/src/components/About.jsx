import React, { Component } from 'react'
import {
  Layout,
  Card,
  BackTop,
  Row,
  Col
} from "antd";
import { ReactComponent as AboutUs } from "../images/AboutUs.svg";
import { ReactComponent as Goals } from "../images/Goals.svg";
import { ReactComponent as Values } from "../images/Values.svg";
import HeaderContent from './content/HeaderContent';
const { Content } = Layout;

export default class About extends Component {
     style = {
        height: 40,
        width: 90,
        lineHeight: "40px",
        borderRadius: 4,
        backgroundColor: "#006466",
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
      };
    render() {
       
        return (
          <div className="contContainer site-card-wrapper">
          <Layout style={{ padding: "0 24px 24px" }} className="site-layout">
            <HeaderContent title={'ABOUT'} />
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Layout className="site-layout members">
                 <Row gutter={16}>
                   <Col span={8}>
                     <Card className = 'Card-Title' title={<h3><b>About Us</b></h3>} bordered={false} cover={<AboutUs />} style={{height: "350px"}}>
                       <p className = 'Card-contatnt'>FLANCER is your destination of showing the case of your existing projects,repositories, and designs in detail as a Developer while you are able to share them with other developers, creating a new project along with detailed info, and read, update, delete existing project as well, with the ability to update the project status whether public or private.</p>
                     </Card>
                   </Col>
                   <Col span={8}>
                     <Card className = 'Card-Title' title={<h3><b>Our gouls</b></h3>}bordered={false} cover={<Goals />} style={{height: "350px"}}>
                       <ul className = 'Card-contatnt'>
                         <li>A container of creative's projects in one place</li>
                         <li>keeping on creative's projects</li>
                         <li>Creating a transparent and collaborative environment</li>
                         <li>Allowing our creatives the ability to manage their creative's projects </li>
                         <li>Sharing their creative's projects with other creatives </li>
                       </ul>       
                    </Card>
                   </Col>
                   <Col span={8}>
                    <Card className = 'Card-Title' title={<h3><b>Our values</b></h3>} bordered={false} cover={<Values />} style={{height: "350px"}}>
                       <p className = 'Card-contatnt'>Keeping the works and projects by collecting them in one place, while preserving the project quality, guaranteeing for our creatives the ultimate good experience by upholding our commitment to maintaining the very highest standards in quality and service.</p>
                       <br/>
                    </Card>
                   </Col>  
               </Row>
               </Layout>
               <p className = 'lastLine'>   At FLANCER, we are always excited to share with our developers the success stories their projects , their achievements. </p>
               <br/>
               </Content>
           <BackTop>
               <div style={this.style}>Go Up</div>
           </BackTop> 
        </Layout>
        </div>
          )
      } 
   }

           