import React from "react";
import { updateField, deleteField } from "./../../utils/dataBaseUtils";

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
    <div className="fingerBoardExercise">
      <input type="date" name="date" value={date} onChange={handleChange} />
      <input
        type="text"
        name="setsNumber"
        value={setsNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="workInterval"
        value={workInterval}
        onChange={handleChange}
      />
      <input
        type="text"
        name="restInterval"
        value={restInterval}
        onChange={handleChange}
      />
      <input
        type="text"
        name="pauseBetweenSets"
        value={pauseBetweenSets}
        onChange={handleChange}
      />
      <button
        onClick={() => deleteField(props.index, props.user, "fingerboard")}
      >
        Remove route
      </button>
    </div>
  );
};

export default FingerboardExercise;
