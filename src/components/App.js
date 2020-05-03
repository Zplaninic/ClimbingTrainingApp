import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./private/PrivateRoute";
import Climbing from "./climbing/Climbing";
import Strength from "./strength/Strength";
import Fingerboard from "./fingerboard/Fingerboard";
import NotFound from "./basic/NotFound";
import Home from "./Home";
import Analysis from "./analysis/Analysis";
import Admin from "./private/Admin";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Header from "./../components/basic/Header";
import { GlobalStyle } from "./../css/style";
import Footer from "./../components/basic/Footer";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/climbing" component={Climbing} />
          <PrivateRoute exact path="/strength" component={Strength} />
          <PrivateRoute exact path="/fingerboard" component={Fingerboard} />
          <PrivateRoute exact path="/analysis" component={Analysis} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route path="/*" component={NotFound} />
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    </Router>
  );
};

export default App;
