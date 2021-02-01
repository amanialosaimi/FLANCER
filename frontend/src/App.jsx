import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import DeveloperSidebar from "./components/profile/DeveloperSidebar";
import DeveloperProfile from "./components/profile/DeveloperProfile";
import DeveloperProjects from "./components/profile/DeveloperProjects";
import LatestProjects from "./components/LatestProjects";
import PageFooter from "./components/PageFooter";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Setting from './components/profile/DeveloperSetting'
import axios from 'axios'

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
  const register = (newUserInfo = {username: "demo", password: "demo"}) => {
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
          <Header />
          <About />
          <PageFooter />
        </Route>
        <Route path="/contact">
          <Header />
          <Contact />
          <PageFooter />
        </Route>
        <Route path="/register">
          <Header />
          <Register />
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
          <Route path="/profile/settings">
            <Setting/>
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
