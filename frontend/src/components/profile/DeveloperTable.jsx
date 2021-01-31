import React, { Component } from 'react'
import { Table } from 'antd';
import { EyeOutlined, StarOutlined } from '@ant-design/icons'
import '../../App.css'
export default class DeveloperTable extends Component {
  render() {

    const columns = [
      {
        title: 'Project Title',
        dataIndex: 'Project Title',
      },
      {
        title: 'Technologies',
        dataIndex: 'Technologies',
      },
      {
        title: 'Date',
        dataIndex: 'Date',
      },
      {
        title: 'Public / Private',
        dataIndex: 'Public / Private',
      },
      {
        title: 'Licence',
        dataIndex: 'Licence',
      },
      {
        title: <StarOutlined />,
        dataIndex: 'Stars',
      },
      {
        title: <EyeOutlined />,
        dataIndex: 'Viewers',
      },
    ];
    const data = [

    ]


    return (
      <div>
        <br />
        
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{record.Description}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />

      </div>
    )
  }
}