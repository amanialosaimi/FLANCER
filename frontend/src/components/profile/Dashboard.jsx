import React, { useState, useEffect } from "react"
import DeveloperSidebar from "./DeveloperSidebar";
import DeveloperProfile from "./DeveloperProfile";
import DeveloperProjects from "./DeveloperProjects";
import DeveloperPublication from "./DeveloperPublication"
import DeveloperSetting from './DeveloperSetting'

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Dashboard(props) {

    const [uesrProfile, setProfile] = useState()
    useEffect(() => {
        if(props.profile?.authenticated){
            setProfile(props.profile)
        }
    }, [props.profile])
    return (
        <div>
            <DeveloperSidebar />
            <Switch>
                <Route exact path="/dashboard">
                    <DeveloperProfile profile={uesrProfile} status={props.status} />
                </Route>
                <Route path="/dashboard/projects">
                    <DeveloperProjects profile={uesrProfile} status={props.status} />
                </Route>
                <Route path="/dashboard/publication">
                    <DeveloperPublication profile={uesrProfile} />
                </Route>
                <Route path="/dashboard/settings">
                    <DeveloperSetting profile={uesrProfile} />
                </Route>
            </Switch>
        </div>
    )
}
