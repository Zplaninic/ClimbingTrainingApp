/* eslint-disable no-alert */
import React, { Component } from 'react';

class TrainingPicker extends Component {
	myInput = React.createRef();

	goToTraining = (event) => {
		event.preventDefault();
		const trainingName = this.myInput.current.value;

		this.props.history.push(`/${trainingName}`);
	}

	render() {
		return (
			<form onSubmit={this.goToTraining}>
				<label>
				Pick your training today:
					<select ref={this.myInput}>
						<option value="climbing" >Climbing</option>
						<option value="strength">Strength</option>
						<option value="fingerboard">Fingerboard</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}

	handleCategories
}

export default TrainingPicker;


