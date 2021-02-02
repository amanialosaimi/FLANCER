import DeveloperSidebar from "./DeveloperSidebar";
import DeveloperDashboard from "./DeveloperDashboard";
import DeveloperProfile from "./DeveloperProfile";
import DeveloperProjects from "./DeveloperProjects";
import DeveloperPublication from "./DeveloperPublication"
import DeveloperSetting from './DeveloperSetting'

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Dashboard(props) {
    return (
        <div>
            <DeveloperSidebar />
            <Switch>
                <Route exact path="/dashboard">
                    <DeveloperDashboard profile={props.profile} />
                </Route>
                <Route path="/dashboard/profile">
                    <DeveloperProfile profile={props.profile} />
                </Route>
                <Route path="/dashboard/projects">
                    <DeveloperProjects profile={props.profile} />
                </Route>
                <Route path="/dashboard/publication">
                    <DeveloperPublication profile={props.profile} />
                </Route>
                <Route path="/dashboard/settings">
                    <DeveloperSetting profile={props.profile} />
                </Route>
            </Switch>
        </div>
    )
}
