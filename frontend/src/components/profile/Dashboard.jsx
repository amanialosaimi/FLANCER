import DeveloperSidebar from "./DeveloperSidebar";
import DeveloperDashboard from "./DeveloperDashboard";
import DeveloperProfile from "./DeveloperProfile";
import DeveloperProjects from "./DeveloperProjects";
import DeveloperPublication from "./DeveloperPublication"
 // eslint-disable-next-line
 import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <DeveloperSidebar />
            <Switch>
                <Route exact path="/dashboard">
                    <DeveloperDashboard />
                </Route>
                <Route path="/dashboard/profile">
                    <DeveloperProfile />
                </Route>
                <Route path="/dashboard/projects">
                    <DeveloperProjects />
                </Route>
                <Route path="/dashboard/publication">
                    <DeveloperPublication />
                </Route>
            </Switch>
        </div>
    )
}
