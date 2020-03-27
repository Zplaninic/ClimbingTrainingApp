import React, { useState, useContext } from "react";
import Button from "../../css/elements/Button";
import PropTypes from "prop-types";
import { addExerciseToDatabse } from "./../../utils/dataBaseUtils";
import { AuthContext } from "../../context/auth";

const FingerBoardForm = ({ addSession }) => {
  const Auth = useContext(AuthContext);

  const [fingerBoardExercises, setFingerBoardExercises] = useState({});
  const [fingerBoardExercise, setFingerBoardExercise] = useState({
    date: "",
    setsNumber: "",
    workInterval: "",
    restInterval: "",
    pauseBetweenSets: ""
  });

  const updateFingerBoardSession = e => {
    setFingerBoardExercise({
      ...fingerBoardExercise,
      [e.target.name]: e.target.value
    });
  };

  const addExerciseFromForm = fingerBoardExercises => {
    setFingerBoardExercises({
      ...fingerBoardExercises,
      [`Finger${Date.now()}`]: fingerBoardExercise
    });

    addExerciseToDatabse(
      fingerBoardExercise,
      Auth.userID,
      "fingerboard",
      "Finger"
    );
  };

  const createSession = e => {
    e.preventDefault();

    addExerciseFromForm(fingerBoardExercise);

    setFingerBoardExercise({
      setsNumber: "",
      workInterval: "",
      restInterval: "",
      pauseBetweenSets: ""
    });
  };

  return (
    <form className="fingerboard-training" onSubmit={createSession}>
      <input
        value={fingerBoardExercise.date}
        name="date"
        type="date"
        onChange={updateFingerBoardSession}
      />
      <input
        name="setsNumber"
        type="text"
        placeholder="Sets"
        value={fingerBoardExercise.setsNumber}
        onChange={updateFingerBoardSession}
      />
      <input
        name="workInterval"
        type="text"
        placeholder="Work interval"
        value={fingerBoardExercise.workInterval}
        onChange={updateFingerBoardSession}
      />
      <input
        name="restInterval"
        type="text"
        placeholder="Rest interval"
        value={fingerBoardExercise.restInterval}
        onChange={updateFingerBoardSession}
      />
      <input
        name="pauseBetweenSets"
        type="text"
        placeholder="Pause time"
        value={fingerBoardExercise.pauseBetweenSets}
        onChange={updateFingerBoardSession}
      />
      <Button type="submit">Add Session</Button>
    </form>
  );
};

FingerBoardForm.propTypes = {
  addSession: PropTypes.func
};

export default FingerBoardForm;
