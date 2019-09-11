/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Button from '../css/elements/Button'
import { Form, Input, Select} from '../css/elements/FormInput'; 


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
			<React.Fragment>
				<Form className="date-picker">
					<Input name="date" type="date" ref={this.dateRef} onChange={this.createDate}/>
				</Form>
				<Form className="route-edit" onSubmit={this.createRoute}>
					<Input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
					<Input name="grade" ref={this.gradeRef} type="text" placeholder="Grade"/>
					<Input name="movements" ref={this.movementsRef} type="number" placeholder="Movements"/>
					<Select name="type" ref={this.typeRef}>
						<option value="boulder">Boulder</option>
						<option value="route">Route</option>
					</Select>
					<Input name="rest" ref={this.restTimeRef} type="text" placeholder="Rest time (seconds)"/>
					<Button type="submit">Add Route</Button>
				</Form>
			</React.Fragment>
    	);
    }
}

export default ClimbingTrainingForm;
