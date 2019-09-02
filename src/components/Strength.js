/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import StrengthTrainingForm from './StrengthTrainingForm';

class Strength extends Component {
	render() {
		return (
			<div className="strength-training">
				<h1>Strength training</h1>
				<StrengthTrainingForm/>

			</div>
		);
	}
}

export default Strength;
