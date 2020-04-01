import React from "react";
import PropTypes from "prop-types";
import { updateField, deleteField } from "./../../utils/dataBaseUtils";
import {
  RemoveButton,
  InputData,
  InputNames,
  Exercise
} from "./../../css/elements/TrainingPages";

const ClimbingRoute = props => {
  const { date, name, grade, movements, type, restTime } = props.routeDetails;

  const handleChange = e => {
    e.preventDefault();

    const updatedRoute = {
      ...props.routeDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };
    updateField(props.index, updatedRoute, props.user, "climbing");
  };

  return (
    <Exercise className="route">
      <InputNames>Date</InputNames>
      <InputData type="text" name="date" value={date} onChange={handleChange} />
      <InputNames>Name</InputNames>
      <InputData type="text" name="name" value={name} onChange={handleChange} />
      <InputNames>Grade</InputNames>
      <InputData
        type="text"
        name="grade"
        value={grade}
        onChange={handleChange}
      />
      <InputNames>Movements</InputNames>
      <InputData
        type="text"
        name="movements"
        value={movements}
        onChange={handleChange}
      />
      <InputNames>Type</InputNames>
      <InputData type="text" name="type" value={type} onChange={handleChange} />
      <InputNames>Rest(s)</InputNames>
      <InputData
        type="text"
        name="restTime"
        value={restTime}
        onChange={handleChange}
      />
      <RemoveButton
        onClick={() => deleteField(props.index, props.user, "climbing")}
      >
        Remove route
      </RemoveButton>
    </Exercise>
  );
};

ClimbingRoute.propTypes = {
  updateRoute: PropTypes.func,
  deleteRoute: PropTypes.func,
  routeDetails: PropTypes.shape({
    grade: PropTypes.string,
    movements: PropTypes.string,
    name: PropTypes.string,
    restTime: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.string
  })
};

export default ClimbingRoute;
