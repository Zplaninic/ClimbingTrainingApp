import React from "react";
import PropTypes from "prop-types";
import { updateField, deleteField } from "./../../utils/dataBaseUtils";
import {
  RemoveButton,
  InputData,
  InputNames,
  Exercise
} from "./../../css/elements/TrainingPages";

const StrengthExercise = props => {
  console.log(props);
  const { date, muscles, type, sets, reps, rest } = props.exerciseDetails;

  const handleChange = e => {
    const updatedExercise = {
      ...props.exerciseDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateField(props.index, updatedExercise, props.user, "strength");
  };

  return (
    <Exercise className="exercise">
      <InputNames>Date</InputNames>
      <InputData type="text" name="date" onChange={handleChange} value={date} />
      <InputNames>Muscles</InputNames>
      <InputData
        type="text"
        name="muscles"
        onChange={handleChange}
        value={muscles}
      />
      <InputNames>Name Exercise</InputNames>
      <InputData type="text" name="type" onChange={handleChange} value={type} />
      <InputNames>Sets</InputNames>
      <InputData type="text" name="sets" onChange={handleChange} value={sets} />
      <InputNames>Repetitions</InputNames>
      <InputData type="text" name="reps" onChange={handleChange} value={reps} />
      <InputNames>Rest(s)</InputNames>
      <InputData type="text" name="rest" onChange={handleChange} value={rest} />
      <RemoveButton
        onClick={() => deleteField(props.index, props.user, "strength")}
      >
        Remove exercise
      </RemoveButton>
    </Exercise>
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
  index: PropTypes.string
};

export default StrengthExercise;
