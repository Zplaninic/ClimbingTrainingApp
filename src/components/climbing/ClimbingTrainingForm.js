import React, { useState } from "react";
import { Form, Input, Select } from "../../css/elements/FormInput";
import PropTypes from "prop-types";
import { validate } from "./../../helper";
import {
  Button,
  SectionForm,
  Fieldset,
  Label,
  Legend
} from "./../../css/elements/TrainingPages";
import { addToMongo } from "./../../utils/db";

const ClimbingTrainingForm = props => {
  const [routes, setRoutes] = useState({});
  const [climbingRoute, setClimbingRouteState] = useState({
    date: "",
    name: "",
    grade: "",
    movements: "",
    type: "boulder",
    rest: ""
  });

  const updateClimbingRouteState = e => {
    setClimbingRouteState({
      ...climbingRoute,
      [e.target.name]: e.target.value
    });
  };

  const addRouteFromForm = route => {
    setRoutes({ ...routes, [`Route${Date.now()}`]: route });

    addToMongo(
      "http://localhost:8080/api/climbing/route",
      route,
      props.setIsUpdatedFromDatabase
    );
  };

  const createRoute = e => {
    e.preventDefault();

    if (!climbingRoute.date) {
      return;
    }

    addRouteFromForm(climbingRoute);

    setClimbingRouteState({
      date: "",
      name: "",
      grade: "",
      movements: "",
      type: "boulder",
      rest: ""
    });
  };

  const error = validate(climbingRoute.date);

  return (
    <SectionForm>
      <Form className="route-edit" onSubmit={createRoute}>
        <Fieldset>
          <Legend>Your climbing routine</Legend>
          <Label>Date</Label>
          <Input
            primary={error}
            value={climbingRoute.date}
            name="date"
            type="date"
            required
            onChange={updateClimbingRouteState}
          />
          <Label>Name</Label>
          <Input
            value={climbingRoute.name}
            name="name"
            type="text"
            onChange={updateClimbingRouteState}
          />
          <Label>Grade</Label>
          <Input
            value={climbingRoute.grade}
            name="grade"
            type="text"
            onChange={updateClimbingRouteState}
          />
          <Label>Movements</Label>
          <Input
            value={climbingRoute.movements}
            name="movements"
            type="number"
            onChange={updateClimbingRouteState}
          />
          <Label>Type of route</Label>
          <Select
            name="type"
            onChange={updateClimbingRouteState}
            value={climbingRoute.type}
          >
            <option value="boulder">Boulder</option>
            <option value="route">Route</option>
          </Select>
          <Label>Rest time (seconds)</Label>
          <Input
            value={climbingRoute.rest}
            name="rest"
            type="text"
            onChange={updateClimbingRouteState}
          />
          <Button type="submit">Add Route</Button>
        </Fieldset>
      </Form>
    </SectionForm>
  );
};

ClimbingTrainingForm.propTypes = {
  addRoute: PropTypes.func
};

export default ClimbingTrainingForm;
