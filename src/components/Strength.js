/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import StrengthTrainingForm from './StrengthTrainingForm';
import StrengthExercise from './StrengthExercise';

class Strength extends Component {
	state = {
		exercises: {}
	}

	addExercise = (exercise) => {
		const exercises = { ...this.state.exercises };

		exercises[`Route${Date.now()}`] = exercise;

		this.setState({
			exercises: exercises
		});
	}

	render() {
		return (
			<div className="strength-training">
				<h1>Strength training</h1>
				<StrengthTrainingForm addExercise={this.addExercise}/>
				<ul className="exercises">
					{Object.keys(this.state.exercises).map(key => <StrengthExercise key={key} exerciseDetails={this.state.exercises[key]}/>)}
				</ul>
			</div>
		);
	}
}

export default Strength;
