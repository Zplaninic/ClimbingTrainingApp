/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class StrengthExercise extends Component {
	render() {
		const { name, type, sets, reps, rest, date} = this.props.exerciseDetails;

		return (
			<ul className="exercise">
				<li><p>{date}</p></li>
				<li><h4>{name}</h4></li>
				<li><p>{type}</p></li>
				<li><p>{sets}</p></li>
				<li><p>{reps}</p></li>
				<li><p>{rest}</p></li>
			</ul>
		);
	}
}

export default StrengthExercise;
