import React from "react";
import { updateField, deleteField } from "./../../utils/dataBaseUtils";
import {
  RemoveButton,
  InputData,
  InputNames,
  Exercise
} from "./../../css/elements/TrainingPages";

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
    updateField(props.index, updatedExercise, props.user, "fingerboard");
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
        onClick={() => deleteField(props.index, props.user, "fingerboard")}
      >
        Remove route
      </RemoveButton>
    </Exercise>
  );
};

export default FingerboardExercise;
