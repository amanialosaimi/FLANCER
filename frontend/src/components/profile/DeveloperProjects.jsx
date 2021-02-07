import React, { useEffect, useState } from "react";
import DeveloperTable from './DeveloperTable';
import ProjectForm from './ProjectForm';
<<<<<<< HEAD
import { Typography, Layout, Card, Col, Row } from 'antd';
=======
import { Typography, Layout, Card, Col, Row, Spin } from 'antd';
>>>>>>> Release-v2.3.2
import { API } from '../ops/API'
import 'antd/dist/antd.css';

const { Title } = Typography;
const { Content } = Layout;

export default function DeveloperProjects(props) {
<<<<<<< HEAD
    const [githubProfile, setGithubProfile] = useState('apple')
    const [githubRepos, setGithubRepos] = useState()
    const [githubStars, setGithubStars] = useState()
    useEffect(() => {
        const fetchGHProfile = async (username) => {
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
        try {
            fetchGHProfile('apple').then(()=>{
                const totalStars = githubRepos?.reduce((acc, repo) => acc + repo.stars, 0);
                setGithubStars(totalStars)
            })
        } catch (err) {
            console.log(err)
        }
        
=======
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
                    setGithubProfile(result.data.profile)
                    setGithubRepos(result.data.repos)
                    result.data.status ? console.log("Github Retrive Error:", result.data.status)
                    : console.log(
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

>>>>>>> Release-v2.3.2
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
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
<<<<<<< HEAD
                    <Card title="Total Repos" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{githubProfile ? githubProfile.public_repos : "0"}</Title></Card>
=======
                    <Card title="Total Repos" bordered={false} style={{ textAlign: 'center' }}><Title level={2}>{githubProfile ? repoCount : <Spin tip={`Loading ${currentGH}'s repos...`} spinning={loadingGH} delay={100}></Spin>}</Title></Card>
>>>>>>> Release-v2.3.2
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
