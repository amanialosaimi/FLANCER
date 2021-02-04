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

function DeveloperPublication() {
    const items = [{ key: 2, title: 'hola'}, { key: 2, title: 'hola'}, { key: 3, title: 'hola'}, { key: 3, title: 'hola'}]
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
                            <Meta title="Fullname" description="@account" /><br />
                            <Meta title="Projects" description="0" />
                        </Card>
                    </Col>
                </Sider>
            </Layout>
            <Layout style={{ marginLeft: 520, marginTop: 100 }}>
                <Row gutter={[16, 16]}>
                    {items.map((e) => {
                        return (

                            <Col key={e.key} span={8} >

                                <Card
                                    hoverable
                                    style={gridStyle}
                                    cover={<img alt="example" src={Banner} />}
                                >
                                    <Meta title="Project Title" description={<><p>Project Description</p><p style={{marginBottom: '4px'}}>PUB/PRV</p></>} />
                                </Card>
                            </Col>

                        )
                    })}
                </Row>


            </Layout>

        </>
    )

}
export default DeveloperPublication
