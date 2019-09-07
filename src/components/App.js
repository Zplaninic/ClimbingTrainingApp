import React, { Component } from 'react';
import TrainingPicker from './TrainingPicker';

class App extends Component {
	render() {
		return (
			<div className="training">
				<div className="menu">
					<TrainingPicker />
				</div>
			</div>
		);
	}
}

export default App;
