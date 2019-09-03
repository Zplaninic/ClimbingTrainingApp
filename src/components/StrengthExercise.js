/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class StrengthExercise extends Component {
	render() {
		const { name, type, sets, reps, rest } = this.props.exerciseDetails;

		return (
			<li className="exercise">
				<h4>{name}</h4>
				<p>{type}</p>
				<p>{sets}</p>
				<p>{reps}</p>
				<p>{rest}</p>
			</li>
		);
	}
}

export default StrengthExercise;
