/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
import React from "react";
import Button from "../css/elements/Button";
import { Form, Input, Select } from "../css/elements/FormInput";
import { validate } from "../helper";

class ClimbingTrainingForm extends React.Component {
  nameRef = React.createRef();
  gradeRef = React.createRef();
  movementsRef = React.createRef();
  typeRef = React.createRef();
  restTimeRef = React.createRef();
  dateRef = React.createRef();

  createRoute = event => {
    event.preventDefault();

    const route = {
      name: this.nameRef.current.value,
      grade: this.gradeRef.current.value,
      movements: this.movementsRef.current.value,
      type: this.typeRef.current.value,
      restTime: this.restTimeRef.current.value,
      date: this.dateRef.current.value
    };

    if (!route.date) {
      return;
    }

    this.props.addRoute(route);

    event.currentTarget.reset();
  };

  createDate = event => {
    event.preventDefault();

    const date = event.target.value;

    this.props.addDate(date);
  };

  render() {
    const error = validate(this.props.date);
    console.log(error);

    return (
      <React.Fragment>
        <Form className="date-picker">
          {error === true && <p>Input date</p>}
          <Input
            primary={error}
            name="date"
            type="date"
            ref={this.dateRef}
            onChange={this.createDate}
          />
        </Form>
        <Form className="route-edit" onSubmit={this.createRoute}>
          <Input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name"
          />
          <Input
            name="grade"
            ref={this.gradeRef}
            type="text"
            placeholder="Grade"
          />
          <Input
            name="movements"
            ref={this.movementsRef}
            type="number"
            placeholder="Movements"
          />
          <Select name="type" ref={this.typeRef}>
            <option value="boulder">Boulder</option>
            <option value="route">Route</option>
          </Select>
          <Input
            name="rest"
            ref={this.restTimeRef}
            type="text"
            placeholder="Rest time (seconds)"
          />
          <Button type="submit">Add Route</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default ClimbingTrainingForm;
