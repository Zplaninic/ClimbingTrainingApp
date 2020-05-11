import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "../../css/elements/FormInput";
import { Button, Label } from "./../../css/elements/TrainingPages";
import { addToMongo } from "./../../utils/db";
import styled from "styled-components";

const FingerBoardForm = props => {
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

    addToMongo(
      `${process.env.REACT_APP_API_URL}/fingerboard/session`,
      fingerBoardExercise,
      props.setIsUpdatedFromDatabase
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
        <TitleForm>
          <Legend>Your fingerboard set</Legend>
        </TitleForm>
        <InputTraining>
          <FormGroup>
            <Label>Date</Label>
            <InputRow>
              <InputGroup>
                <Input
                  value={fingerBoardExercise.date}
                  name="date"
                  type="date"
                  required
                  onChange={updateFingerBoardSession}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Number of sets</Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="setsNumber"
                  type="text"
                  value={fingerBoardExercise.setsNumber}
                  onChange={updateFingerBoardSession}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Work interval</Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="workInterval"
                  type="text"
                  value={fingerBoardExercise.workInterval}
                  onChange={updateFingerBoardSession}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Rest time </Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="restInterval"
                  type="text"
                  value={fingerBoardExercise.restInterval}
                  onChange={updateFingerBoardSession}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Pause between sets</Label>
            <InputRow>
              <InputGroup>
                <Input
                  name="pauseBetweenSets"
                  type="text"
                  placeholder="Pause time"
                  value={fingerBoardExercise.pauseBetweenSets}
                  onChange={updateFingerBoardSession}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Add Session</Button>
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
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 100%;
  width: 100%;
  padding: 20px;
  padding-left: 0px;
`;

FingerBoardForm.propTypes = {
  addSession: PropTypes.func
};

export default React.memo(FingerBoardForm);
