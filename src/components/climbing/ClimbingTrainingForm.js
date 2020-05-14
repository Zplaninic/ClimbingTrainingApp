import React, { useState } from "react";
import { Form, Input, Select } from "../../css/elements/FormInput";
import PropTypes from "prop-types";
import { validate } from "./../../utils/helperUtils";
import { Button, Label } from "./../../css/elements/TrainingPages";
import { addToMongo } from "./../../utils/db";
import styled from "styled-components";
import { device } from "./../../css/device";

const ClimbingTrainingForm = props => {
  const [routes, setRoutes] = useState({});
  const [climbingRoute, setClimbingRouteState] = useState({
    date: "",
    name: "",
    grade: "",
    movements: "",
    type: "boulder",
    rest: ""
  });

  const updateClimbingRouteState = e => {
    setClimbingRouteState({
      ...climbingRoute,
      [e.target.name]: e.target.value
    });
  };

  const addRouteFromForm = route => {
    setRoutes({ ...routes, [`Route${Date.now()}`]: route });

    addToMongo(
      `${process.env.REACT_APP_API_URL}/climbing/route`,
      route,
      props.setIsUpdatedFromDatabase
    );
  };

  const createRoute = e => {
    e.preventDefault();

    if (!climbingRoute.date) {
      return;
    }

    addRouteFromForm(climbingRoute);

    setClimbingRouteState({
      date: "",
      name: "",
      grade: "",
      movements: "",
      type: "boulder",
      rest: ""
    });
  };

  const error = validate(climbingRoute.date);

  return (
    <SectionForm>
      <Form className="route-edit" onSubmit={createRoute}>
        <TitleForm>
          <Legend>Your climbing routine</Legend>
        </TitleForm>
        <InputTraining>
          <FormGroup>
            <Label>Date</Label>
            <InputRow>
              <InputGroup>
                <Input
                  primary={error}
                  value={climbingRoute.date}
                  name="date"
                  type="date"
                  required
                  onChange={updateClimbingRouteState}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Name</Label>
            <InputRow>
              <InputGroup>
                <Input
                  value={climbingRoute.name}
                  name="name"
                  type="text"
                  onChange={updateClimbingRouteState}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Grade</Label>
            <InputRow>
              <InputGroup>
                <Input
                  value={climbingRoute.grade}
                  name="grade"
                  type="text"
                  onChange={updateClimbingRouteState}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Movements</Label>
            <InputRow>
              <InputGroup>
                <Input
                  value={climbingRoute.movements}
                  name="movements"
                  type="number"
                  onChange={updateClimbingRouteState}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Type of route</Label>
            <InputRow>
              <InputGroup>
                <Select
                  name="type"
                  onChange={updateClimbingRouteState}
                  value={climbingRoute.type}
                >
                  <option value="boulder">Boulder</option>
                  <option value="route">Route</option>
                </Select>
              </InputGroup>
            </InputRow>
          </FormGroup>
          <FormGroup>
            <Label>Rest time (seconds)</Label>
            <InputRow>
              <InputGroup>
                <Input
                  value={climbingRoute.rest}
                  name="rest"
                  type="text"
                  onChange={updateClimbingRouteState}
                />
              </InputGroup>
            </InputRow>
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Add Route</Button>
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

ClimbingTrainingForm.propTypes = {
  addRoute: PropTypes.func
};

export default React.memo(ClimbingTrainingForm);
