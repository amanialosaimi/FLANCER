import React, { useEffect, useState } from "react";
import DeveloperTable from './DeveloperTable';
import ProjectForm from './ProjectForm';
import { Typography, Layout, Card, Col, Row } from 'antd';
import { API } from '../ops/API'
import 'antd/dist/antd.css';

const { Title } = Typography;
const { Content } = Layout;

export default function DeveloperProjects(props) {
    const [githubProfile, setGithubProfile] = useState('apple')
    const [githubRepos, setGithubRepos] = useState([])
    const [githubStars, setGithubStars] = useState(0)
    useEffect(() => {
        const fetchGHProfile = async (username) => {

            if (process.env.GITHUB_TOKEN) {
                await API.getProfileGH(username)
                    .then((result) => {
                        setGithubProfile(result.data?.profileInfo)
                        setGithubRepos(result.data?.repos)
                        console.log(
                            "Github Profile", result.data?.profileInfo,
                            "Github Repos", result.data?.repos)
                    })
                    .catch((err) => console.log(err))
            }

            fetchGHProfile()
        }
        const totalStars = githubRepos.reduce((acc, repo) => acc + repo.stars, 0);
        setGithubStars(totalStars)
    }, [])
    return (
        <Layout style={{ marginLeft: 200 }}>
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={1}>Projects</Title></Col>
                <Col><ProjectForm status={props.status} /></Col>
            </Row>
            <Row style={{ marginTop: 30, marginLeft: 28 }}>
                <Col span={8}>
                    <Card title="Total Projects" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{props.profile?.projects.length}</Title></Card>
                </Col>
                <Col span={8}>
                    <Card title="Total Repos" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{githubProfile > 0 ? githubProfile.public_repos : "0"}</Title></Card>
                </Col>
                <Col span={7}>
                    <Card title="Total Stars" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{githubStars ? githubStars.toString() : "0"}</Title></Card>
                </Col>
            </Row>
            <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
                <div className="project-layout" style={{ padding: 16, marginRight: 10, textAlign: 'center' }}>
                    <DeveloperTable profile={props.profile} status={props.status} />
                </div>
            </Content>
        </Layout>
    )
}
