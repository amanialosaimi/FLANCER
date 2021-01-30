import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home'
import Header from './components/Header'
import DeveloperSidebar from './components/profile/DeveloperSidebar'
import DeveloperProfile from './components/profile/DeveloperProfile'
import DeveloperProjects from './components/profile/DeveloperProjects'
import LatestProjects from "./components/LatestProjects";
import PageFooter from "./components/PageFooter";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <PageFooter />
        </Route>
        <Route path="/latest">
          <Header />
          <LatestProjects />
          <PageFooter />
        </Route>
        <Route path="/about">
          <Header/>
          <About/>
          <PageFooter />

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
