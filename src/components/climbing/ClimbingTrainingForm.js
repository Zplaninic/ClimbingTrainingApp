import React, { useState } from "react";
import Button from "../../css/elements/Button";
import { Form, Input, Select } from "../../css/elements/FormInput";
import { validate } from "../../helper";
import PropTypes from "prop-types";

const ClimbingTrainingForm = ({ addRoute }) => {
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

  const createRoute = e => {
    e.preventDefault();

    if (!climbingRoute.date) {
      return;
    }

    addRoute(climbingRoute);

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
    <React.Fragment>
      <Form className="route-edit" onSubmit={createRoute}>
        {error === true && <p>Input date</p>}
        <Input
          // primary={error}
          value={climbingRoute.date}
          name="date"
          type="date"
          onChange={updateClimbingRouteState}
        />
        <Input
          value={climbingRoute.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={updateClimbingRouteState}
        />
        <Input
          value={climbingRoute.grade}
          name="grade"
          type="text"
          placeholder="Grade"
          onChange={updateClimbingRouteState}
        />
        <Input
          value={climbingRoute.movements}
          name="movements"
          type="number"
          placeholder="Movements"
          onChange={updateClimbingRouteState}
        />
        <Select
          name="type"
          onChange={updateClimbingRouteState}
          value={climbingRoute.type}
        >
          <option value="boulder">Boulder</option>
          <option value="route">Route</option>
        </Select>
        <Input
          value={climbingRoute.rest}
          name="rest"
          type="text"
          placeholder="Rest time (seconds)"
          onChange={updateClimbingRouteState}
        />
        <Button type="submit">Add Route</Button>
      </Form>
    </React.Fragment>
  );
};

export default ClimbingTrainingForm;

ClimbingTrainingForm.propTypes = {
  addRoute: PropTypes.func
};
