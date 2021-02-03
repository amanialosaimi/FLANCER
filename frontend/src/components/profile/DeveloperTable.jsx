import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import '../../App.css'
export default function DeveloperTable(props) {
  const [projects, updateProject] = useState([])
  useEffect(() => {
    let result = props.projects?.map(function (project, i) {
      let projectObject = Object.assign({}, project);
      projectObject.delete = <DeleteOutlined />;
      projectObject.edit = <EditOutlined />
      projectObject.key = i + 1
      projectObject.isVisible = projectObject.isVisible ? "Public" : "Private"
      return projectObject;
    })
    console.log(result)
    updateProject(result)

  }, [props.projects])
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      defaultSortOrder: 'descends',
    },
    {
      title: 'Project Title',
      dataIndex: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Technologies',
      dataIndex: 'technology',
    },
    {
      title: 'Start Date',
      dataIndex: 'date',
    },
    {
      title: 'Visible',
      dataIndex: 'isVisible',
    },
    {
      title: 'Licence',
      dataIndex: 'licence',
    },
    {
      title: "Update",
      dataIndex: 'edit',
    },
    {
      title: "Delete",
      dataIndex: 'delete',
    },
  ];

  return (
    <div>
      <br />

      <Table
        columns={columns}
        // sortDirections={['descend', 'ascend']}
        // expandable={{
        //   expandedRowRender: record => <p style={{ margin: 0 }}>{record.Description}</p>,
        //   rowExpandable: record => record.name !== 'Not Expandable',
        // }}
        dataSource={props.projects ? projects : []}
      />

    </div>
  )

}