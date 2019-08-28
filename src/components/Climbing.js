/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import ClimbingTrainingForm from './ClimbingTrainingForm';
import ClimbingRoute from './ClimbingRoute';
import Timer from './Timer';

class Climbing extends Component {
	state = {
		routes: {}
	}

	addRoute = (route) => {
		const routes = { ...this.state.routes };

		routes[`Route${Date.now()}`] = route;

		this.setState({
			routes: routes
		});
	}

	render() {
		return (
			<div className="training-program">
				<h1>Climbing training</h1>
				<h3>{this.props.tagline}</h3>
				<ClimbingTrainingForm addRoute={this.addRoute} />
				<ul className="routes">
					{Object.keys(this.state.routes).map(key => <ClimbingRoute key={key} routeDetails={this.state.routes[key]}/>)}
				</ul>
				<Timer />
			</div>
		);
	}
}

export default Climbing;
