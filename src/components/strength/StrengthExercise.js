import React from "react";
import PropTypes from "prop-types";

const StrengthExercise = props => {
  const handleChange = e => {
    const updatedExercise = {
      ...props.exerciseDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    props.updateExercise(props.index, updatedExercise);
  };

  const { date, muscles, type, sets, reps, rest } = props.exerciseDetails;

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
      <button onClick={() => props.deleteExercise(props.index)}>
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
