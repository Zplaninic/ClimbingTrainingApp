import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import Climbing from "./Climbing";
import Strength from "./Strength";
import Fingerboard from "./Fingerboard";
import NotFound from "./NotFound";
import Home from "./Home";
import Authentication from "./authentication/Authentication";

class App extends Component {
  state = {
    uid: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    const userObject = await base.fetch(`${authData.user.uid}`, {});

    this.setState({
      uid: authData.user.uid
    });

    if (Object.keys(userObject).length === 0) {
      base.post(`${authData.user.uid}`, {
        data: { climbing: "", strength: "", fingerboard: "" }
      });
    }

    // this.setState({ uid: authData.user.uid });

    //1. Look up the current user in the firebase database
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    console.log(authProvider);

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log("logout");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    if (!this.state.uid) {
      return (
        <Router>
          <Route exact={true} path="/">
            <Authentication authenticate={this.authenticate} />
          </Route>
        </Router>
      );
    }
    return (
      <Router>
        <React.Fragment>
          <Home logout={this.logout} />
          <Switch>
            <Route path="/climbing">
              <Climbing userId={this.state.uid} />
            </Route>
            <Route path="/strength">
              <Strength userId={this.state.uid} />
            </Route>
            <Route path="/fingerboard">
              <Fingerboard userId={this.state.uid} />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
