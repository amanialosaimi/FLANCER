import React, { Component } from 'react'
import { Row, Col , Card,BackTop,Divider} from "antd"
import { ReactComponent as AboutUs } from "../images/AboutUs.svg";
import { ReactComponent as Goals } from "../images/Goals.svg";
import { ReactComponent as Values } from "../images/Values.svg";

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
            <div className ='About' >
              <Divider orientation="center" type="horizontal">
            <h1 className="large-font">
              <b>About FLANCER</b>
            </h1>
          
          </Divider>
               <div className="site-card-wrapper" >  
                 <br/>
                 <Row gutter={16}>
                   <Col span={8}>
                     <Card className = 'Card-Title' title="About us" bordered={false} cover={<AboutUs />} style={{height: "350px"}}>
                       <p className = 'Card-contatnt'>FLANCER is your destination of showing the case of your existing projects,repositories, and designs in detail as a Developer while you are able to share them with other developers, creating a new project along with detailed info, and read, update, delete existing project as well, with the ability to update the project status whether public or private.</p>
                     </Card>
                   </Col>
                   <Col span={8}>
                     <Card className = 'Card-Title' title="Our gouls" bordered={false} cover={<Goals />} style={{height: "350px"}}>
                       <ul className = 'Card-contatnt'>
                         <li>Collecting of developer projects in one page</li>
                         <li>keeping on developers projects</li>
                         <li>Creating a transparent and collaborative environment</li>
                         <li>The developer  be able to manage their projects </li>
                         <li>The developer be able to share their projects with other developers </li>
                       </ul>       
                    </Card>
                   </Col>
                   <Col span={8}>
                    <Card className = 'Card-Title' title="Our values" bordered={false} cover={<Values />} style={{height: "350px"}}>
                       <p className = 'Card-contatnt'>Keeping the works and projects by collecting them in one place, while preserving the project quality, guaranteeing for our developers the ultimate good experience by upholding our commitment to maintaining the very highest standards in quality and service.</p>
                       <br/>
                    </Card>
                   </Col>  
               </Row>
               <br/>
               <p className = 'lastLine'>   At FLANCER, we are always excited to share with our developers the success stories their projects , their achievements. </p>
               <br/>
            </div>  
           <BackTop>
               <div style={this.style}>Go Up</div>
           </BackTop> 
        </div>
          )
      } 
   }

           