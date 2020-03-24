import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Climbing from "./climbing/Climbing";
import Strength from "./strength/Strength";
import Fingerboard from "./fingerboard/Fingerboard";
import NotFound from "./stateless/NotFound";
import Home from "./Home";
import Analysis from "./analysis/Analysis";
import Admin from "./private/Admin";
import { AuthContext } from "./../context/auth";
import PrivateRoute from "./private/PrivateRoute";
import Authentication from "./authentication/Authentication";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import { firebaseConfig } from "./../firebase";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userID, setUserID] = useState("");

  const readSession = () => {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) {
      console.log(JSON.parse(user).uid);
      setLoggedIn(true);
      setUserID(JSON.parse(user).uid);
    } else {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    readSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        isLoading,
        setIsLoading,
        userID,
        setUserID
      }}
    >
      Is logged in? {JSON.stringify(isLoggedIn)}
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/climbing"
              component={Climbing}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            />
            <PrivateRoute
              path="/strength"
              component={Strength}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            />
            <PrivateRoute
              path="/fingerboard"
              component={Fingerboard}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            />
            <PrivateRoute
              path="/analysis"
              component={Analysis}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            />
            <PrivateRoute
              path="/admin"
              component={Admin}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            />
            <Route path="/*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

// state = {
//   uid: null
// };

// componentDidMount() {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       this.authHandler({ user });
//     }
//   });
// }

// authHandler = async authData => {
//   const userObject = await base.fetch(`${authData.user.uid}`, {});

//   this.setState({
//     uid: authData.user.uid
//   });

//   if (Object.keys(userObject).length === 0) {
//     base.post(`${authData.user.uid}`, {
//       data: { climbing: "", strength: "", fingerboard: "" }
//     });
//   }
// };

// authenticateWithSocialNetwork = provider => {
//   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
//   console.log(authProvider);

//   firebaseApp
//     .auth()
//     .signInWithPopup(authProvider)
//     .then(this.authHandler);
// };

// authenticateWithEmailAndPass = (email, password) => {
//   console.log(email, password);
//   firebaseApp
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(this.authHandler);
// };

// logout = async () => {
//   console.log("logout");
//   await firebase.auth().signOut();
//   this.setState({ uid: null });
// };

// if (!this.state.uid) {
//   return (
//     <Router>
//     </Router>
//   );
// }
