import React, { useState } from "react";
import Button from "../../css/elements/Button";
import { Form, Input, Select } from "../../css/elements/FormInput";
import { validate } from "../../helper";
import PropTypes from "prop-types";

const StrengthTrainingForm = ({ addExercise }) => {
  const [strengthExercise, setStrenghtExercise] = useState({
    date: "",
    muscles: "antagonist",
    type: "",
    sets: "",
    reps: "",
    rest: ""
  });

  const updateStrengthExercise = e => {
    setStrenghtExercise({
      ...strengthExercise,
      [e.target.name]: e.target.value
    });
  };

  const createExercise = e => {
    e.preventDefault();

    if (!strengthExercise.type || !strengthExercise.date) {
      return;
    }

    addExercise(strengthExercise);

    setStrenghtExercise({
      date: "",
      muscles: "antagonist",
      type: "",
      sets: "",
      reps: "",
      rest: ""
    });
  };

  const error = validate(strengthExercise.date);
  return (
    <React.Fragment>
      <Form className="strength-exercise" onSubmit={createExercise}>
        {error === true && <p>Input date</p>}
        <Input
          value={strengthExercise.date}
          // primary={error}
          name="date"
          type="date"
          onChange={updateStrengthExercise}
        />
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
        <Input
          name="type"
          type="text"
          placeholder="Exercise"
          value={strengthExercise.type}
          required
          onChange={updateStrengthExercise}
        />
        <Input
          name="sets"
          type="number"
          min="0"
          placeholder="Sets"
          value={strengthExercise.sets}
          onChange={updateStrengthExercise}
        />
        <Input
          name="reps"
          type="number"
          min="0"
          placeholder="Repetitions"
          value={strengthExercise.reps}
          onChange={updateStrengthExercise}
        />
        <Input
          name="rest"
          type="number"
          min="0"
          placeholder="Rest time"
          value={strengthExercise.rest}
          onChange={updateStrengthExercise}
        />
        <Button type="submit">Add Route</Button>
      </Form>
    </React.Fragment>
  );
};

StrengthTrainingForm.propTypes = {
  addRoute: PropTypes.func
};

export default StrengthTrainingForm;
