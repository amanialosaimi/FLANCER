import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home.js";
import Header from "./components/Header";
import LatestProjects from "./components/LatestProjects";
import DeveloperProfile from "./components/profile/DeveloperProfile";
import PageFooter from "./components/PageFooter";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <DeveloperProfile />
          </Route>
          <Route path="/latest">
            <LatestProjects />
          </Route>
        </Switch>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
