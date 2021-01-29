import React, { Component } from 'react'
import { Table} from 'antd';
import {EyeOutlined} from '@ant-design/icons'
import '../App.css'
export default class Developers extends Component {
    render() {

const columns = [
    {
      title: 'Project Name',
      dataIndex: 'Project Name',
    },
    {
      title: 'Stars',
      dataIndex: 'Stars',
    },
    {
      title: 'Technologies used',
      dataIndex: 'Technologies',
    },
    {
        title: 'Date',
        dataIndex: 'Date',
    },
    {
        title: <EyeOutlined />,
        dataIndex: 'Viewers',
    },
    {
        title: 'Public / Private',
        dataIndex: 'Public / private',
    },
    {
        title: 'Licence',
        dataIndex: 'Licence',
    },
    {
        title: 'Default Branch',
        dataIndex: 'Default Branch',
    },

  ];
  const data = [

  ]


        return (
            <div>
                <br/>
                <h4>Developer Profile | Name</h4>
                <br/>
                <Table
                columns={columns}
                expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.Description}</p>,
                 rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />,

           </div>
        )}}