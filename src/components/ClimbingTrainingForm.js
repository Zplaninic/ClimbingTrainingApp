/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ReactDOM from 'react-dom'

class ClimbingTrainingForm extends React.Component {

    nameRef = React.createRef();
    gradeRef = React.createRef();
    movementsRef = React.createRef();
    typeRef = React.createRef();
	restTimeRef = React.createRef();
	dateRef = React.createRef();

    createRoute = (event) => {
    	event.preventDefault();

    	const route = {
    		name: this.nameRef.current.value,
    		grade: this.gradeRef.current.value,
    		movements: this.movementsRef.current.value,
    		type: this.typeRef.current.value,
			restTime: this.restTimeRef.current.value,
			date: this.dateRef.current.value
		};
		
			this.props.addRoute(route);

			event.currentTarget.reset();

    }

    render() {
    	return (
    		<form className="route-edit" onSubmit={this.createRoute}>
				<input name="date" ref={this.dateRef} type="date" />
    			<input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
    			<input name="grade" ref={this.gradeRef} type="text" placeholder="Grade"/>
    			<input name="movements" ref={this.movementsRef} type="number" placeholder="Movements"/>
    			<select name="type" ref={this.typeRef}>
    				<option value="boulder">Boulder</option>
    				<option value="route">Route</option>
    			</select>
    			<input name="rest" ref={this.restTimeRef} type="text" placeholder="Rest time (seconds)"/>
    			<button type="submit">Add Route</button>
    		</form>
    	);
    }
}

export default ClimbingTrainingForm;
