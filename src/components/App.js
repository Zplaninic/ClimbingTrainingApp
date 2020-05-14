import React, { useState, useRef } from "react";
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
import Top from "./basic/Top";
import { GlobalStyle } from "./../css/style";
import { useOnClickOutside } from "./hooks/useOnClickOutside";

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Top open={open} setOpen={setOpen} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} open={open} setOpen={setOpen} node={node} />
            )}
          />
          <Route
            path="/login"
            render={props => <Login {...props} open={open} setOpen={setOpen} />}
          />
          <Route
            path="/signup"
            render={props => (
              <Signup {...props} open={open} setOpen={setOpen} />
            )}
          />
          <PrivateRoute
            exact
            path="/climbing"
            component={Climbing}
            open={open}
            setOpen={setOpen}
            node={node}
          />
          <PrivateRoute
            exact
            path="/strength"
            component={Strength}
            open={open}
            setOpen={setOpen}
            node={node}
          />
          <PrivateRoute
            exact
            path="/fingerboard"
            component={Fingerboard}
            open={open}
            setOpen={setOpen}
            node={node}
          />
          <PrivateRoute exact path="/analysis" component={Analysis} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
