import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import FlowSpinner from "./components/FlowSpinner";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";
import "./index.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return (
    <div className="main">
      <div className="twinkling"/>
      {(isAuthenticated) && (
        <Router history={history}>
          <div id="app" className="main-container">
            {/* <div className="row header"> */}
              <NavBar />
              {/* <FlowSpinner /> */}
            {/* </div> */}
            <div className="row content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </div>
        </Router>
    )}
  </div>
  );
};

export default App;
