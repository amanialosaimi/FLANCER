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
    let repos = []
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
    repos = result

<<<<<<< HEAD
  }, [props.profile]) // eslint-disable-line react-hooks/exhaustive-deps
=======
    
    props.repos?.map((repo, i) => {
      let repoObject = Object.assign({}, repo)
      let repoDate = <Moment fromNow>{repo.created_at}</Moment>
      repoObject.delete = <DeleteOutlined />
      repoObject.edit = <UpdateProject project={repo} status={props.state} />
      repoObject.key = i + props.profile?.projects.length + 1
      repoObject.private = repoObject.private === true
      repoObject.isVisible = repoObject.private ? "Private" : "Public"
      repoObject.date = repoDate
      repoObject.title = repo.name
      repoObject.technology = repo.topics.length > 0 ? repo.topics.join('\n') : "Not Specified"
      repoObject.licence = repo.license ? repo.license.name : 'N/A'
      repoObject.description = repo.description ? repo.description : "Not Specified"
      repos.push(repoObject)
      props.count(repos.length)
      return null
    })    
    updateProject(repos)

  }, [props.repos, props.profile]) // eslint-disable-line react-hooks/exhaustive-deps
  const [sortInfo, setSortInfo] = useState({})
  let updateTable = (pagination, filters, sorter) => {
    console.log("Pagination >", pagination,"Filter >", filters, "Sort >", sorter);
    setSortInfo(sorter);
  };
>>>>>>> Release-v2.3.2
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: 'Project Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
      sortOrder: sortInfo.columnKey === "title" && sortInfo.order,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Technologies',
      dataIndex: 'technology',
      key: 'technology'
    },
    {
      title: 'Start Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date.props.children) - new Date(b.date.props.children),
      sortOrder: sortInfo.columnKey === "date" && sortInfo.order,
    },
    {
      title: 'Visible',
      dataIndex: 'isVisible',
      key: 'isVisible',
      sorter: (a, b) => a.isVisible.length - b.isVisible.length,
      sortOrder: sortInfo.columnKey === "isVisible" && sortInfo.order,
    },
    {
      title: 'Licence',
      dataIndex: 'licence',
      key: 'licence'
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
        dataSource={projects ? projects : []}
        onChange={updateTable}
      />
    </div>
  )

}