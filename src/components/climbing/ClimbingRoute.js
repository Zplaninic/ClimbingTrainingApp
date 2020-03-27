import React from "react";
import PropTypes from "prop-types";
import { updateField, deleteField } from "./../../utils/dataBaseUtils";

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
    <div className="route">
      <input type="text" name="date" value={date} onChange={handleChange} />
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="text" name="grade" value={grade} onChange={handleChange} />
      <input
        type="text"
        name="movements"
        value={movements}
        onChange={handleChange}
      />
      <input type="text" name="type" value={type} onChange={handleChange} />
      <input
        type="text"
        name="restTime"
        value={restTime}
        onChange={handleChange}
      />
      <button onClick={() => deleteField(props.index, props.user, "climbing")}>
        Remove route
      </button>
    </div>
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
