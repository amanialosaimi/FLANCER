import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Dashboard from "./components/profile/Dashboard"
import LatestProjects from "./components/LatestProjects";
import PageFooter from "./components/PageFooter";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Setting from './components/profile/DeveloperSetting'
import axios from 'axios'
import Members from "./components/Members";


function App() {

  //this axios for get all the users from the server
  const getAllUsers = () => {
    axios
      .get(`http://localhost:3000/find`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  //this for new user
  const register = (newUserInfo = { username: "demo", password: "demo" }) => {
    console.log('send API POST ');
    axios
      .post(`http://localhost:3000/register`, newUserInfo)
      .then((response) => {
        console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        // HERE IS YOUR LOGIC

      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/latest">
            <LatestProjects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/memebrs">
            <Members/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Route>
        </Switch>
        <PageFooter />
      </Router>

    </>
  );
}

export default App;