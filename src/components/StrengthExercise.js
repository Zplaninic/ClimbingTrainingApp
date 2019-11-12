/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import { Ul, Li } from "../css/elements/Lists";

class StrengthExercise extends Component {
  render() {
    const { name, type, sets, reps, rest, date } = this.props.exerciseDetails;

    return (
      <Ul className="exercise">
        <Li>{date}</Li>
        <Li>{name}</Li>
        <Li>{type}</Li>
        <Li>Sets: {sets}</Li>
        <Li>Reps: {reps}</Li>
        <Li>Rest: {rest} s</Li>
      </Ul>
    );
  }
}

export default StrengthExercise;
