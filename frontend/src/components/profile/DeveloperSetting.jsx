import React, { Component } from 'react'
import { Button } from 'antd';
export default class DeveloperSetting extends Component {
    constructor(){
        super()
        this.state  = {
            light : true
        }}
    
    changeLight = () =>{
        if(this.state.light){
            this.setState({
                light : !this.state.light
            })
            this.DarkMode('Black')
        }
        else if(!this.state.light){
            this.setState({
                light : !this.state.light
        })
            this.DarkMode('White')

        }
    }
    DarkMode = (color) =>{
       document.body.style.backgroundColor =color;
       document.querySelector('.Dark').innerHTML = this.state.light ?'Light mode' : 'Dark mode' 
    }
    raiseInvoiceClicked = () =>{
       const url = 'https://github.com/';
       window.open(url, '_blank');
    }
    render() {
        return (
            <div className = 'Setting'>
              <h1 className="font-setting">
                 <b>Developer Setting</b>
              </h1>
              <br/>
              <Button onClick={this.raiseInvoiceClicked} block>Open githup page</Button>
              <Button className ='Dark' onClick={this.changeLight}  block>Dark Mode</Button>
              <Button block>Delete your account</Button>
              <br/>
              <br/>

            </div>
        
        )
    }
}
