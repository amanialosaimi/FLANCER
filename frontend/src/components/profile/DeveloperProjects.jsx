import React, { useEffect, useState } from "react";
import DeveloperTable from './DeveloperTable';
import ProjectForm from './ProjectForm';
import { Typography, Layout, Card, Col, Row, Spin } from 'antd';
import { API } from '../ops/API'
import 'antd/dist/antd.css';

const { Title } = Typography;
const { Content } = Layout;

export default function DeveloperProjects(props) {
    const [githubProfile, setGithubProfile] = useState()
    const [githubRepos, setGithubRepos] = useState()
    const [githubStars, setGithubStars] = useState()
    const [loadingGH, setLoadingGH] = useState(false)
    const [currentGH, setCurrentGH] = useState()
    const [repoCount, setRepoCounts] = useState(0)
    useEffect(() => {
        const fetchGHProfile = async () => {
            setCurrentGH('your')
            setLoadingGH(true)
            await API.getUserRepos()
                .then((result) => {
                    setLoadingGH(false)
                    setGithubProfile(result.data?.profile)
                    setGithubRepos(result.data.repos)
                    console.log(
                        "Github Profile", result.data?.profile,
                        "Github Repos", result.data?.repos)
                    return result.data.repos
                })
                .then((repos) => {
                    const totalStars = repos?.reduce((acc, repo) => acc + repo.stargazers_count, 0);
                    setGithubStars(totalStars)
                })
                .catch((err) => console.log(err))
        }

        fetchGHProfile()

    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Layout style={{ marginLeft: 200 }}>
            <Row style={{ marginTop: 30 }}>
                <Col span={10} style={{ margin: '0 28px 0' }}><Title level={1}>Projects</Title></Col>
                <Col><ProjectForm status={props.status} /></Col>
            </Row>
            <Row style={{ marginTop: 30, marginLeft: 28 }}>
                <Col span={8}>
                    <Card title="Total Projects" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{repoCount}</Title></Card>
                </Col>
                <Col span={8}>
                    <Card title="Total Repos" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{githubProfile ? (githubProfile.public_repos + githubProfile.total_private_repos) : <Spin tip={`Loading ${currentGH}'s repos...`} spinning={loadingGH} delay={100}></Spin>}</Title></Card>
                </Col>
                <Col span={7}>
                    <Card title="Total Stars" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{githubStars ? githubStars : <Spin tip={`Loading ${currentGH}'s stars...`} spinning={loadingGH} delay={100}></Spin>}</Title></Card>
                </Col>
            </Row>
            <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
                <div className="project-layout" style={{ padding: 16, marginRight: 10, textAlign: 'center' }}>
                    <DeveloperTable profile={props.profile} repos={githubRepos} status={props.status} count={setRepoCounts} />
                </div>
            </Content>
        </Layout>
    )
}
