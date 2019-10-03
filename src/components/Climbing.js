/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import ClimbingTrainingForm from './ClimbingTrainingForm';
import ClimbingRoute from './ClimbingRoute';
import Timer from './Timer';
import base from '../base';


class Climbing extends Component {
	state = {
		routes: {},
		date: {}
	}

	componentDidMount() {
		this.ref = base.syncState('climbing', {
			context: this,
			state: 'routes'
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	addRoute = (route) => {
		const routes = { ...this.state.routes };

		routes[`Route${Date.now()}`] = route;

		this.setState({
			routes: routes
		});
	}

	addDate = (date) => {

		this.setState({
			date: date
		})
	}

	render() {
		return (
			<div className="training-program">
				<h1>Climbing training</h1>
				<h3>{this.props.tagline}</h3>
				<ClimbingTrainingForm addRoute={this.addRoute} addDate={this.addDate} {...this.state}/>
				<ul className="routes">
					{Object.keys(this.state.routes).map(key => <ClimbingRoute key={key} routeDetails={this.state.routes[key]}/>)}
				</ul>
				<Timer />
			</div>
		);
	}
}

export default Climbing;
