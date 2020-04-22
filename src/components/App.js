import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Climbing from "./climbing/Climbing";
import Strength from "./strength/Strength";
import Fingerboard from "./fingerboard/Fingerboard";
import NotFound from "./basic/NotFound";
import Home from "./Home";
import Analysis from "./analysis/Analysis";
import Admin from "./private/Admin";
import { AuthContext } from "./../context/auth";
import PrivateRoute from "./private/PrivateRoute";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Header from "./../components/basic/Header";
import { GlobalStyle } from "./../css/style";
import Footer from "./../components/basic/Footer";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const readSession = () => {
    const user = window.sessionStorage.getItem("login");
    let token = JSON.parse(user);

    if (token) {
      setLoggedIn(true);
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
        setIsLoading
      }}
    >
      <GlobalStyle></GlobalStyle>
      <Header></Header>
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
      <Footer></Footer>
    </AuthContext.Provider>
  );
};

export default App;
