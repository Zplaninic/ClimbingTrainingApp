/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Button from '../css/elements/Button'


class FingerBoardForm extends Component {
	onSubmit = false;
	setsRef = React.createRef();
	workRef = React.createRef();
	restRef = React.createRef();
	pauseRef = React.createRef();

	createSession = (event) => {
		event.preventDefault();

		const session = {
			setsRef: this.setsRef.current.value,
			workRef: this.workRef.current.value,
			restRef: this.restRef.current.value,
			pauseRef: this.pauseRef.current.value
		};

		this.props.addSession(session);

		event.currentTarget.reset();

		this.onSubmit = true;
	}

	render() {
		const addButton = (!this.onSubmit) ? <Button type="submit">Add Session</Button> : null;

		return (
			<form className="fingerboard-training" onSubmit={this.createSession}>
				<input name="sets" ref={this.setsRef} type="number" placeholder="Sets"/>
				<input name="work" ref={this.workRef} type="number" placeholder="Work interval"/>
				<input name="rest" ref={this.restRef} type="number" placeholder="Rest interval"/>
				<input name="pause" ref={this.pauseRef} type="number" placeholder="Pause time"/>
				{addButton}
			</form>
		);
	}
}

export default FingerBoardForm;
