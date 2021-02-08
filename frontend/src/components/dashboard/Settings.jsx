import React, { useState } from 'react'
import { Button, Switch, Collapse, Divider, Space, Row, Badge, Alert } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;
const Answer1 = `
  From your Home page click on Contact Us on the Nav Menu, we will recive your email and get back yo you as soon as we can.
`;
const Answer2 = `
  You can go to your Dashboard then Projects From Sidebar Menu to find all you need.
`;
const Answer3 = `
  Yes you can change your password from your Profile Page.
`;

export default function Settings() {
  const [deactiveShow, setDeactiveShow] = useState(false)
  const [light, setLight] = useState(true)
  const changeLight = () => {
    if (light) {
      setLight(!light)
      DarkMode('black')
    } else {
      setLight(!light)
      DarkMode('')
    }
  }
  const DeactiveAccount = ({ state }) => {
    return (
      <Alert
        message="Deactive Account Confirmation"
        description="If you need your account again you'll have to contact us to restore your account."
        type="info"
        action={
          <Space direction="vertical">
            <Button onClick={() => state(false)} size="small" type="primary">
              Accept
          </Button>
            <Button onClick={() => state(false)} size="small" danger type="ghost">
              Decline
          </Button>
          </Space>
        }
      />
    )
  }
  const DarkMode = (color) => {
    document.body.style.backgroundColor = color;
  }
  const githubPage = () => {
    const url = 'https://github.com/';
    window.open(url, '_blank');
  }
  return (
    <Row style={{ marginTop: 100 }}>
      <div className='setting contContainer' >
        <Divider orientation="center" type="horizontal">
          <h1 className="large-font">
            <b>Settings</b>
          </h1>
        </Divider>
        <br />
        <div className="settings-items">
          <h3>FAQs</h3>

          <Collapse defaultActiveKey={['']} >
            <Panel header="From where can I contact you?" key="1">
              <p>{Answer1}</p>
            </Panel>
            <Panel header="Where can I find all projects?" key="2">
              <p>{Answer2}</p>
            </Panel>
            <Panel header="Can I change my password?" key="3">
              <p>{Answer3}</p>
            </Panel>
          </Collapse><br />
          {deactiveShow ? <DeactiveAccount state={setDeactiveShow} /> : "Hola"}
          <br />
          <Space>
            <Button onClick={githubPage} block>Open githup page</Button>
            <Button onClick={() => setDeactiveShow(true)} block>Deactive your account</Button>
          </Space>
          <Space style={{ marginTop: 10 }}>
            <Switch checkedChildren="Dark Mood On" unCheckedChildren="Dark Mood Off" onChange={changeLight} /><Badge style={{ backgroundColor: '#52c41a' }} count={"BETA"} />
          </Space>
        </div>
      </div>
    </Row>

  )
}