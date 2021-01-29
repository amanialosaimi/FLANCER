import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home.js'
import DeveloperProfile from './components/profile/DeveloperProfile'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <DeveloperProfile />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
