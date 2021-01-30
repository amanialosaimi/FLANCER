import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DeveloperSidebar from './components/profile/DeveloperSidebar'
import DeveloperProjects from './components/profile/DeveloperProjects'

import Home from './components/Home.js'
import DeveloperProfile from './components/profile/DeveloperProfile'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <DeveloperSidebar />
          <Route exact path="/dashboard">
            <DeveloperProfile />
          </Route>
          <Route path="/myprojects">
            <DeveloperProjects />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
