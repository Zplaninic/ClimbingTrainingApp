/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ClimbingRoute extends Component {
	handleChange = (event) => {
		//Get the copy of current fish 
		const updatedRoute = {
			...this.props.routeDetails, 
			[event.currentTarget.name]: event.currentTarget.value	
		}

		this.props.updateRoute(this.props.index, updatedRoute)
	}

	render() {
		const { grade, movements, name, restTime, type, date } = this.props.routeDetails;

		return (
			<div className="route">
				<input type="text" name="date" onChange={this.handleChange} value={date} />
				<input type="text" name="name" onChange={this.handleChange} value={name}/>
				<input type="text" name="grade" onChange={this.handleChange} value={grade}/>
				<input type="text" name="movements" onChange={this.handleChange} value={movements}/>
				<input type="text" name="type" onChange={this.handleChange} value={type}/>
				<input type="text" name="restTime" onChange={this.handleChange} value={restTime}/>
				{/* <li><p>{date}</p></li>
				<li><h4>{name}</h4></li>
				<li><p>{grade}</p></li>
				<li><p>{movements}</p></li>
				<li><p>{type}</p></li>
				<li><p>{restTime}</p></li> */}
			</div>
		);
	}
}

export default ClimbingRoute;
