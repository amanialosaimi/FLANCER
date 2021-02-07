import React, { useState } from 'react'
import { Button, Switch, Collapse, Divider, Space, Row, Badge } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;
const Answer1 = `
  From your Home page click on Contact Us on the nav Menu, we will recive your email and get back yo you as soon as we can.
`;
const Answer2 = `
  You can go to your Dashboard then My Projects to find all you need.
`;
const Answer3 = `
  Yes you can change your password from your profile.
`;
function callback(key) {
  console.log(key);
}
function DeveloperSetting() {
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
  const DarkMode = (color) => {
    document.body.style.backgroundColor = color;
  }
  const raiseInvoiceClicked = () => {
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

          <Collapse defaultActiveKey={['']} onChange={callback}>
            <Panel header="From where can I contact you?" key="1">
              <p>{Answer1}</p>
            </Panel>
            <Panel header="Where can I find all my projects?" key="2">
              <p>{Answer2}</p>
            </Panel>
            <Panel header="Can I change my password?" key="3">
              <p>{Answer3}</p>
            </Panel>
          </Collapse><br />
          <Space>
            <Button onClick={raiseInvoiceClicked} block>Open githup page</Button>
            <Button block>Delete your account</Button>
          </Space>
          <Space style={{ marginTop: 20 }}>
            <Switch checkedChildren="Dark Mood On" unCheckedChildren="Dark Mood Off" onChange={changeLight} /><Badge style={{ backgroundColor: '#52c41a' }} count={"BETA"} />
          </Space>
          <br />
          <br />
        </div>
      </div>
    </Row>

  )
}
export default DeveloperSetting