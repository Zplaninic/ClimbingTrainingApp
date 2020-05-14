import React, { useState } from "react";
import { Form, Input, Select } from "../../css/elements/FormInput";
import { validate } from "../../utils/helperUtils";
import PropTypes from "prop-types";
import { Button, Label } from "./../../css/elements/TrainingPages";
import { addToMongo } from "./../../utils/db";
import styled from "styled-components";
import { device } from "./../../css/device";

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
        <TitleForm>
          <Legend>Your strength routine</Legend>
        </TitleForm>
        <InputTraining>
          <FormGroup>
            <Label>Date</Label>
            <InputRow>
              <InputGroup>
                <Input
                  value={strengthExercise.date}
                  primary={error}
                  name="date"
                  type="date"
                  onChange={updateStrengthExercise}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Type of exercises</Label>
            <InputRow>
              <InputGroup>
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
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Name Exercise</Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="type"
                  type="text"
                  value={strengthExercise.type}
                  required
                  onChange={updateStrengthExercise}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Sets</Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="sets"
                  type="number"
                  min="0"
                  value={strengthExercise.sets}
                  onChange={updateStrengthExercise}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Repetitions</Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="reps"
                  type="number"
                  min="0"
                  value={strengthExercise.reps}
                  onChange={updateStrengthExercise}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Rest(s)</Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="rest"
                  type="number"
                  min="0"
                  value={strengthExercise.rest}
                  onChange={updateStrengthExercise}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Add Exercise</Button>
          </ButtonContainer>
        </InputTraining>
      </Form>
    </SectionForm>
  );
};

const ButtonContainer = styled.div`
  width: 30%;
  text-align: center;
`;
const InputTraining = styled.div`
  width: 100%;
`;
const TitleForm = styled.div`
  width: 100%;
`;
const InputRow = styled.div`
  width: 70%;
`;
const InputGroup = styled.div`
  padding: 10px;
`;
const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #e4e7ea;
`;
const Legend = styled.legend`
  width: 100%;
  text-align: center;
  padding-bottom: 4px;
  background-color: #1a2229;
  color: #fff;
  padding: 10px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  line-height: 20px;
  font-size: 14px;
`;
const SectionForm = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  order: 2;

  @media ${device.laptop} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    padding: 20px;
    padding-left: 0px;
  }
`;

StrengthTrainingForm.propTypes = {
  addRoute: PropTypes.func
};

export default React.memo(StrengthTrainingForm);
