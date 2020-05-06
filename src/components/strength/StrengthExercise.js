import React from "react";
import PropTypes from "prop-types";
import { deleteFromMongo, updateMongo } from "./../../utils/db";
import {
  RemoveButton,
  InputData,
  InputNames,
  Exercise
} from "./../../css/elements/TrainingPages";

const StrengthExercise = props => {
  const { date, muscles, type, sets, reps, rest } = props.exerciseDetails;

  const handleChange = e => {
    const updatedExercise = {
      ...props.exerciseDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateMongo(
      `${process.env.REACT_APP_API_URL}/strength/exercise/`,
      props.index,
      updatedExercise,
      props.setIsUpdatedFromDatabase
    );
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
        onClick={() =>
          deleteFromMongo(
            `${process.env.REACT_APP_API_URL}/strength/exercise/`,
            props.index,
            props.setIsUpdatedFromDatabase
          )
        }
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
    sets: PropTypes.number,
    reps: PropTypes.number,
    rest: PropTypes.number
  }),
  index: PropTypes.string
};

export default React.memo(StrengthExercise);
