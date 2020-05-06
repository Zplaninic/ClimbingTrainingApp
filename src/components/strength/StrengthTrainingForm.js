import React, { useState } from "react";
import { Form, Input, Select } from "../../css/elements/FormInput";
import { validate } from "../../utils/helperUtils";
import PropTypes from "prop-types";
import {
  Button,
  SectionForm,
  Fieldset,
  Label,
  Legend
} from "./../../css/elements/TrainingPages";
import { addToMongo } from "./../../utils/db";

const StrengthTrainingForm = props => {
  const [strengthExercises, setStrenghtExercises] = useState({});
  const [strengthExercise, setStrenghtExercise] = useState({
    date: "",
    muscles: "antagonist",
    type: "",
    sets: 0,
    reps: 0,
    rest: 0
  });

  const updateStrengthExercise = e => {
    setStrenghtExercise({
      ...strengthExercise,
      [e.target.name]: e.target.value
    });
  };

  const addStrengthExerciseFromForm = strengthExercise => {
    setStrenghtExercises({
      ...strengthExercises,
      [`Route${Date.now()}`]: strengthExercise
    });

    addToMongo(
      `${process.env.REACT_APP_API_URL}/strength/exercise`,
      strengthExercise,
      props.setIsUpdatedFromDatabase
    );
  };

  const createExercise = e => {
    e.preventDefault();

    if (!strengthExercise.type || !strengthExercise.date) {
      return;
    }

    addStrengthExerciseFromForm(strengthExercise);

    setStrenghtExercise({
      date: "",
      muscles: "antagonist",
      type: "",
      sets: 0,
      reps: 0,
      rest: 0
    });
  };

  const error = validate(strengthExercise.date);
  return (
    <SectionForm>
      <Form className="strength-exercise" onSubmit={createExercise}>
        <Fieldset>
          <Legend>Your strength routine</Legend>
          <Label>Date</Label>
          <Input
            value={strengthExercise.date}
            primary={error}
            name="date"
            type="date"
            onChange={updateStrengthExercise}
          />
          <Label>Type of exercises</Label>
          <Select
            name="muscles"
            value={strengthExercise.antagonist}
            onChange={updateStrengthExercise}
          >
            <option value="antagonist">Antagonist</option>
            <option value="core">Core</option>
            <option value="upperBoady">Upper body</option>
            <option value="flexibility">Flexibility</option>
          </Select>
          <Label>Name Exercise</Label>
          <Input
            name="type"
            type="text"
            value={strengthExercise.type}
            required
            onChange={updateStrengthExercise}
          />
          <Label>Sets</Label>
          <Input
            name="sets"
            type="number"
            min="0"
            value={strengthExercise.sets}
            onChange={updateStrengthExercise}
          />
          <Label>Repetitions</Label>
          <Input
            name="reps"
            type="number"
            min="0"
            value={strengthExercise.reps}
            onChange={updateStrengthExercise}
          />
          <Label>Rest(s)</Label>
          <Input
            name="rest"
            type="number"
            min="0"
            value={strengthExercise.rest}
            onChange={updateStrengthExercise}
          />
          <Button type="submit">Add Route</Button>
        </Fieldset>
      </Form>
    </SectionForm>
  );
};

StrengthTrainingForm.propTypes = {
  addRoute: PropTypes.func
};

export default React.memo(StrengthTrainingForm);
