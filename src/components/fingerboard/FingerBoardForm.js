import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { addExerciseToDatabse } from "./../../utils/dataBaseUtils";
import { AuthContext } from "../../context/auth";
import { Form, Input } from "../../css/elements/FormInput";
import {
  Button,
  SectionForm,
  Fieldset,
  Label,
  Legend
} from "./../../css/elements/TrainingPages";

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

  const addExerciseFromForm = fingerBoardExercise => {
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
    <SectionForm>
      <Form className="fingerboard-training" onSubmit={createSession}>
        <Legend>Your fingerboard set</Legend>
        <Fieldset>
          <Label>Date</Label>
          <Input
            value={fingerBoardExercise.date}
            name="date"
            type="date"
            required
            onChange={updateFingerBoardSession}
          />
          <Label>Number of sets</Label>
          <Input
            name="setsNumber"
            type="text"
            value={fingerBoardExercise.setsNumber}
            onChange={updateFingerBoardSession}
          />
          <Label>Work interval</Label>
          <Input
            name="workInterval"
            type="text"
            value={fingerBoardExercise.workInterval}
            onChange={updateFingerBoardSession}
          />
          <Label>Rest time </Label>
          <Input
            name="restInterval"
            type="text"
            value={fingerBoardExercise.restInterval}
            onChange={updateFingerBoardSession}
          />
          <Label>Pause between sets</Label>
          <Input
            name="pauseBetweenSets"
            type="text"
            placeholder="Pause time"
            value={fingerBoardExercise.pauseBetweenSets}
            onChange={updateFingerBoardSession}
          />
          <Button type="submit">Add Session</Button>
        </Fieldset>
      </Form>
    </SectionForm>
  );
};

FingerBoardForm.propTypes = {
  addSession: PropTypes.func
};

export default FingerBoardForm;
