import React, { Component } from 'react'
import { Button, Switch, Collapse, Divider, Space } from 'antd';
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
export default class DeveloperSetting extends Component {
  constructor() {
    super()
    this.state = {
      light: true
    }
  }

  changeLight = () => {
    if (this.state.light) {
      this.setState({
        light: !this.state.light
      })
      this.DarkMode('Black')
    }
    else if (!this.state.light) {
      this.setState({
        light: !this.state.light
      })
      this.DarkMode('White')

    }
  }
  DarkMode = (color) => {
    document.body.style.backgroundColor = color;
    document.querySelector('.Dark').innerHTML = this.state.light ? 'Light mode' : 'Dark mode'
  }
  raiseInvoiceClicked = () => {
    const url = 'https://github.com/';
    window.open(url, '_blank');
  }
  render() {
    return (
      <div className='Setting contContainer site-card-wrapper' >
        <Divider orientation="center" type="horizontal">
          <h1 className="large-font">
            <b>Settings</b>
          </h1>

        </Divider>
        {/* // <div className = 'Setting'>
            //   <h1 className="font-setting">
            //      <b></b>
            //   </h1> */}
        <br />
        <div className="Settings-items">
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
            <Button onClick={this.raiseInvoiceClicked} block>Open githup page</Button>
            <Button block>Delete your account</Button>
            <Switch className='Dark' onChange={this.changeLight} block />
          </Space>
          <br />
          <br />
        </div>
      </div>


    )
  }
}
