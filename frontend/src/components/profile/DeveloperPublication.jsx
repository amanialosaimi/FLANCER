import React from "react"
import { Layout, Row, Col, Typography, Avatar, Card } from 'antd';
import { ReactComponent as Membership } from "../../images/Membership.svg";
import Banner from "../../images/flancerBanner.png";

const { Title } = Typography;
const { Meta } = Card;
const { Sider } = Layout;

const gridStyle = {
    width: "300px",
    textAlign: "center",
    marginTop: 16,
};

function DeveloperPublication(props) {

    const ProjectSort = props.profile?.projects.sort((a, b) => new Date(b.date) - new Date(a.date))
    const ProjectPreview = ({ content }) => {
        return (
            <Col span={8} >

                <Card
                    hoverable
                    style={gridStyle}
                    cover={<img alt="example" src={content.image ? content.image : Banner} />}
                >
                    <Meta title={content.title} description={<><p>{content.description}</p><p style={{ marginBottom: '4px' }}>{content.isVisible ? "Public" : "Private"}</p></>} />
                </Card>
            </Col>
        )
    }
    return (
        <>
            <Layout style={{ marginLeft: 0 }}>
                <Sider theme="light"
                    style={{
                        height: '100vwh',
                        position: 'fixed',
                        top: 100,
                        bottom: 0,
                        left: 200,
                        padding: 0,
                        width: '250px'
                    }}
                >
                    <Col span={30} style={{ margin: '0' }}><Title level={1}>Publication</Title></Col>

                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: "300px",
                                textAlign: "center",
                                //marginTop: 16,
                                margin: '15px 50px 0 0'
                            }}
                            cover={<Avatar size={310} src={<Membership />} />}
                        >
                            <Meta title="Account" description={`@${props.profile?.user.username}`} /><br />
                            <Meta title="Projects" description={props.profile?.projects.length} />
                        </Card>
                    </Col>
                </Sider>
            </Layout>
            <Layout style={{ marginLeft: 520, marginTop: 100 }}>
                <Row gutter={[16, 16]}>
                    {ProjectSort?.map((project, index) => {
                        return (
                            <ProjectPreview key={index + 1} content={project} />
                        )
                    })}
                </Row>


            </Layout>

        </>
    )

}
export default DeveloperPublication
