/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import StrengthTrainingForm from "./StrengthTrainingForm";
import StrengthExercise from "./StrengthExercise";
import base from "../base";

class Strength extends Component {
  state = {
    exercises: {},
    date: {}
  };

  componentDidMount() {
    this.ref = base.syncState("strength", {
      context: this,
      state: "exercises"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addExercise = exercise => {
    const exercises = { ...this.state.exercises };

    exercises[`Route${Date.now()}`] = exercise;

    this.setState({
      exercises: exercises
    });
  };

  addDate = date => {
    this.setState({
      date: date
    });
  };

  updateExercise = (key, updatedRoute) => {
    //Take the copy of current routes
    const exercises = { ...this.state.exercises };
    //Update the state
    exercises[key] = updatedRoute;
    //Set to state
    this.setState({ exercises });
  };

  deleteExercise = key => {
    //1. Take the copy of state
    const exercises = { ...this.state.roexercisesutes };
    //2. Update the state
    exercises[key] = null;
    //3. Update state
    this.setState({ exercises });
  };

  render() {
    return (
      <div className="strength-training">
        <h2>STRENGTH TRAINING</h2>
        <StrengthTrainingForm
          addExercise={this.addExercise}
          addDate={this.addDate}
          {...this.state}
        />
        <ul className="exercises">
          {Object.keys(this.state.exercises).map(key => (
            <StrengthExercise
              index={key}
              key={key}
              exerciseDetails={this.state.exercises[key]}
              updateExercise={this.updateExercise}
              deleteExercise={this.deleteExercise}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Strength;
