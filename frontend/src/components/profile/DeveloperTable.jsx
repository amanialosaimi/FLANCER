import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
import { API } from "../ops/API"
import Moment from 'react-moment'
import '../../App.css'
import UpdateProject from './UpdateProject';
export default function DeveloperTable(props) {
  const [projects, updateProject] = useState([])

  // eslint-disable-next-line
  useEffect(() => {
    let result = props.profile?.projects?.map(function (project, i) {
      let projectObject = Object.assign({}, project);
      let projectDate = <Moment fromNow>{new Date(projectObject.date)}</Moment>
      projectObject.delete = <DeleteOutlined onClick={async () => {
        console.log("Delete Project: ", project.title)
        await API.deleteProject(project._id)
          .then((res) => console.log(res))
        await props.status()
      }} />;
      projectObject.edit = <UpdateProject project={project} status={props.status} />
      projectObject.key = i + 1
      projectObject.isVisible = projectObject.isVisible === "true" // Change From String To Boolen
      projectObject.isVisible = projectObject.isVisible ? "Public" : "Private" // Change True/False To Public/Private
      projectObject.date = projectDate
      return projectObject;
    })
    updateProject(result)

  }, [props.profile]) // eslint-disable-line react-hooks/exhaustive-deps
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
        dataSource={props.profile?.projects ? projects : []}
      />
    </div>
  )

}