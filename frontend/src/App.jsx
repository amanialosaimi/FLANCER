import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Dashboard from "./components/profile/Dashboard"
import LatestProjects from "./components/LatestProjects";
import PageFooter from "./components/PageFooter";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Members from "./components/Members";
import { API } from "./components/ops/API";

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [profile, setProfile] = useState()

  const checkLoginStatus = () => {
    API.checkStatus()
      .then((profile) => {
        if (profile.data.authenticated) {
          console.log('APP', profile)
          setIsLogged(true)
          setProfile(profile.data)
        } else {
          setIsLogged(false)
          setProfile(null)
        }
      })

      .catch((err) => {
        setIsLogged(false)
        setProfile(null)
        console.log("AUTH ERR:", err)
      })
  }

  useEffect(() => {
    checkLoginStatus()
  }, [])
  return (
    <>
      <Router>
        <Header authd={isLogged} auth={setIsLogged} status={checkLoginStatus} />
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
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {isLogged ?
            <Route>
              <Route path="/dashboard">
                <Dashboard profile={profile} status={checkLoginStatus} />
              </Route>
            </Route>
            : <h1 style={{ textAlign: "center", margin: 80 }}>No Content</h1>}
        </Switch>
        <PageFooter />
      </Router>

    </>
  );
}

export default App;