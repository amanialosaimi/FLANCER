import React, { useState, useEffect } from "react"
import DashboardSidebar from "./DashboardSidebar";
import Profile from "./Profile";
import ProjectsOverview from "./ProjectsOverview";
import Publication from "./Publication"
import Settings from './Settings'

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Dashboard(props) {

    const [uesrProfile, setProfile] = useState()
    useEffect(() => {
        if (props.profile?.authenticated) {
            setProfile(props.profile)
        }
    }, [props.profile])
    return (
        <div>
            <DashboardSidebar status={props.status} />
            <Switch>
                <Route exact path="/dashboard">
                    <Profile profile={uesrProfile} status={props.status} />
                </Route>
                <Route path="/dashboard/projects">
                    <ProjectsOverview profile={uesrProfile} status={props.status} />
                </Route>
                <Route path="/dashboard/publication">
                    <Publication profile={uesrProfile} status={props.status}/>
                </Route>
                <Route path="/dashboard/settings">
                    <Settings profile={uesrProfile} />
                </Route>
            </Switch>
        </div>
    )
}
