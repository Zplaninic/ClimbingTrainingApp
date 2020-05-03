import React from "react";
import PropTypes from "prop-types";
import {
  RemoveButton,
  InputData,
  InputNames,
  Exercise
} from "./../../css/elements/TrainingPages";
import { deleteFromMongo, updateMongo } from "./../../utils/db";

const ClimbingRoute = props => {
  const { date, name, grade, movements, type, restTime } = props.routeDetails;

  const handleChange = e => {
    e.preventDefault();

    const updatedRoute = {
      ...props.routeDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateMongo(
      "http://localhost:8080/api/climbing/route/",
      props.index,
      updatedRoute,
      props.setIsUpdatedFromDatabase
    );
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
        onClick={() =>
          deleteFromMongo(
            "http://localhost:8080/api/climbing/route/",
            props.index,
            props.setIsUpdatedFromDatabase
          )
        }
      >
        Remove route
      </RemoveButton>
    </Exercise>
  );
};

ClimbingRoute.propTypes = {
  index: PropTypes.string.isRequired,
  routeDetails: PropTypes.shape({
    grade: PropTypes.string.isRequired,
    movements: PropTypes.string,
    name: PropTypes.string.isRequired,
    rest: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default React.memo(ClimbingRoute);
