/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ClimbingRoute extends Component {
	render() {
		const { grade, movements, name, restTime, type } = this.props.routeDetails;

		return (
			<li className="route">
				<h4>{name}</h4>
				<p>{grade}</p>
				<p>{movements}</p>
				<p>{type}</p>
				<p>{restTime}</p>
			</li>
		);
	}
}

export default ClimbingRoute;
