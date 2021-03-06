import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Likes from "./components/Likes";
import PostPage from "./components/PostPage";
import UserPage from "./components/UserPage";
import FollowPage from "./components/FollowPage";

import {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
} from "./actions/userActions";

const API = "http://localhost:3001/api/v1/logged_in";

class App extends Component {
  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj);
    if (obj) {
      this.props.loggedIn(true);
    }
  };

  handleLogout = (obj) => {
    this.props.removeAuthUser(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  loginStatus = () => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((obj) => {
        if (obj) {
          this.handleLogin(obj);
        } else {
          this.handleLogout(obj);
        }
      });
  };

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup history={props.history} handleLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Login history={props.history} handleLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/home"
            render={(props) => (
              <>
                <Nav history={props.history} handleLogout={this.handleLogout} />
                <Home />
              </>
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <>
                <Nav history={props.history} handleLogout={this.handleLogout} />
                <Profile authUser={this.props.authUser} />
              </>
            )}
          />
          <Route
            exact
            path="/likes"
            render={(props) => (
              <>
                <Nav history={props.history} handleLogout={this.handleLogout} />
                <Likes authUser={this.props.authUser} />
              </>
            )}
          />
          <Route
            exact
            path="/follow"
            render={() => (
              <>
                <Nav />
                <FollowPage />
              </>
            )}
          />
          <Route
            exact
            path="/:username/post/:id"
            render={(props) => (
              <>
                <Nav history={props.history} />
                <PostPage {...props.location} />
              </>
            )}
          />
          <Route
            exact
            path="/:username"
            render={(props) => (
              <>
                <Nav history={props.history} handleLogout={this.handleLogout} />
                <UserPage {...props.location} />
              </>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
