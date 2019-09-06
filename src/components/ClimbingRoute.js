/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ClimbingRoute extends Component {
	render() {
		const { grade, movements, name, restTime, type, date } = this.props.routeDetails;

		return (
			<ul className="route">
				<li><p>{date}</p></li>
				<li><h4>{name}</h4></li>
				<li><p>{grade}</p></li>
				<li><p>{movements}</p></li>
				<li><p>{type}</p></li>
				<li><p>{restTime}</p></li>
			</ul>
		);
	}
}

export default ClimbingRoute;
