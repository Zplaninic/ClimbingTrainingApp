import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Climbing from "./Climbing";
import Strength from "./Strength";
import Fingerboard from "./Fingerboard";
import NotFound from "./NotFound";
import TrainingPicker from "./TrainingPicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TrainingPicker} />
      <Route exact path="/climbing" component={Climbing} />
      <Route exact path="/strength" component={Strength} />
      <Route exact path="/fingerboard" component={Fingerboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
