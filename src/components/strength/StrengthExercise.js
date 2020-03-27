import React from "react";
import PropTypes from "prop-types";
import { updateField, deleteField } from "./../../utils/dataBaseUtils";

const StrengthExercise = props => {
  const { date, muscles, type, sets, reps, rest } = props.exerciseDetails;

  const handleChange = e => {
    const updatedExercise = {
      ...props.exerciseDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateField(props.index, updatedExercise, props.user, "strength");
  };

  return (
    <div className="exercise">
      <input type="text" name="date" onChange={handleChange} value={date} />
      <input
        type="text"
        name="muscles"
        onChange={handleChange}
        value={muscles}
      />
      <input type="text" name="type" onChange={handleChange} value={type} />
      <input type="text" name="sets" onChange={handleChange} value={sets} />
      <input type="text" name="reps" onChange={handleChange} value={reps} />
      <input type="text" name="rest" onChange={handleChange} value={rest} />
      <button onClick={() => deleteField(props.index, props.user, "strength")}>
        Remove exercise
      </button>
    </div>
  );
};

StrengthExercise.propTypes = {
  exerciseDetails: PropTypes.shape({
    date: PropTypes.string,
    muscles: PropTypes.string,
    type: PropTypes.string,
    sets: PropTypes.string,
    reps: PropTypes.string,
    rest: PropTypes.string
  }),
  updateExercise: PropTypes.func,
  index: PropTypes.string,
  deleteExercise: PropTypes.func
};

export default StrengthExercise;
