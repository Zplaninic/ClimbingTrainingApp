import React from "react";
import {
  RemoveButton,
  InputData,
  InputNames,
  Exercise
} from "./../../css/elements/TrainingPages";
import PropTypes from "prop-types";
import { updateMongo, deleteFromMongo } from "./../../utils/db";

const FingerboardExercise = props => {
  const {
    date,
    setsNumber,
    workInterval,
    restInterval,
    pauseBetweenSets
  } = props.fingerDetails;

  const handleChange = e => {
    e.preventDefault();

    const updatedExercise = {
      ...props.fingerDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateMongo(
      `${process.env.REACT_APP_API_URL}/fingerboard/session/`,
      props.index,
      updatedExercise,
      props.setIsUpdatedFromDatabase
    );
  };

  return (
    <Exercise className="fingerBoardExercise">
      <InputNames>Date</InputNames>
      <InputData type="date" name="date" value={date} onChange={handleChange} />
      <InputNames>Number of sets</InputNames>
      <InputData
        type="text"
        name="setsNumber"
        value={setsNumber}
        onChange={handleChange}
      />
      <InputNames>Work interval</InputNames>
      <InputData
        type="text"
        name="workInterval"
        value={workInterval}
        onChange={handleChange}
      />
      <InputNames>Rest time</InputNames>
      <InputData
        type="text"
        name="restInterval"
        value={restInterval}
        onChange={handleChange}
      />
      <InputNames>Pause between sets</InputNames>
      <InputData
        type="text"
        name="pauseBetweenSets"
        value={pauseBetweenSets}
        onChange={handleChange}
      />
      <RemoveButton
        onClick={() =>
          deleteFromMongo(
            `${process.env.REACT_APP_API_URL}/fingerboard/session/`,
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

FingerboardExercise.propTypes = {
  index: PropTypes.string.isRequired,
  fingerDetails: PropTypes.shape({
    pauseBetweenSets: PropTypes.string.isRequired,
    restInterval: PropTypes.string.isRequired,
    date: PropTypes.string,
    setsNumber: PropTypes.string.isRequired,
    workInterval: PropTypes.string.isRequired
  })
};

export default React.memo(FingerboardExercise);
