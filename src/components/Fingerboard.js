/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import FingerboardForm from './FingerBoardForm';
import Countdown from './Countdown';

class Fingerboard extends Component {
	state = {
		sessions: {},
	};

	addSession = (session) => {
		const sessions = { ...this.state.sessions };

		sessions[`Session${Date.now()}`] = session;

		this.setState({
			sessions: sessions
		});
	}

	

	render() {
		return (
			<div className="fingerboard-traning">
				<h1>Fingerboard traning</h1>
				<FingerboardForm addSession={ this.addSession } />
				<Countdown/>
			</div>
		);
	}
}

export default Fingerboard;
