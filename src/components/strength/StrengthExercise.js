import React, { Component } from "react";
import PropTypes from "prop-types";

class StrengthExercise extends Component {
  static propTypes = {
    exerciseDetails: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      sets: PropTypes.string,
      reps: PropTypes.string,
      rest: PropTypes.string,
      date: PropTypes.string
    }),
    updateExercise: PropTypes.func,
    index: PropTypes.string,
    deleteExercise: PropTypes.func
  };

  handleChange = event => {
    //Get the copy of current fish
    const updatedExercise = {
      ...this.props.exerciseDetails,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateExercise(this.props.index, updatedExercise);
  };

  render() {
    const { name, type, sets, reps, rest, date } = this.props.exerciseDetails;

    return (
      <div className="exercise">
        <input
          type="text"
          name="date"
          onChange={this.handleChange}
          value={date}
        />
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="type"
          onChange={this.handleChange}
          value={type}
        />
        <input
          type="text"
          name="sets"
          onChange={this.handleChange}
          value={sets}
        />
        <input
          type="text"
          name="reps"
          onChange={this.handleChange}
          value={reps}
        />
        <input
          type="text"
          name="rest"
          onChange={this.handleChange}
          value={rest}
        />
        <button onClick={() => this.props.deleteExercise(this.props.index)}>
          Remove exercise
        </button>
      </div>
    );
  }
}

export default StrengthExercise;
