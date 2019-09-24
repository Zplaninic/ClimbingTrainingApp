import React from 'react';
import Button from '../css/elements/Button';
import { Form, Input, Select} from '../css/elements/FormInput';
import  { validate } from '../helper';
class StrengthTrainingForm extends React.Component {

	nameRef = React.createRef();
	typeRef = React.createRef();
	setsRef = React.createRef();
	repsRef = React.createRef();
	restRef = React.createRef();
	dateRef = React.createRef();

	createExercise = (event) => {

		event.preventDefault();

		const exercise = {
    		name: this.nameRef.current.value,
    		type: this.typeRef.current.value,
    		sets: this.setsRef.current.value,
    		reps: this.repsRef.current.value,
			rest: this.restRef.current.value,
			date: this.dateRef.current.value
		};

		if(!exercise.type || !exercise.date) {
			return;
		}

		this.props.addExercise(exercise);

		event.currentTarget.reset();

	}
s
	createDate = (event) => {
		event.preventDefault();

		const date = event.target.value;

		this.props.addDate(date);

	}

    render() {
		const error = validate(this.props.date)
		console.log(error);

		return (
			<React.Fragment>
				<Form className="date-picker">
					{error === true && <p>Input date</p>}
					<Input primary={error} name="date" type="date" ref={this.dateRef} onChange={this.createDate}/>
				</Form>
				<Form className="strength-exercise" onSubmit={this.createExercise}>
					<Select ref={this.nameRef}>
							<option value="antagonist" >Antagonist</option>
							<option value="core">Core</option>
							<option value="upperBoady">Upper body</option>
							<option value="flexibility">Flexibility</option>
					</Select>
					<Input name="type" ref={this.typeRef} type="text" placeholder="Exercise" required/>
					<Input name="sets" ref={this.setsRef} type="number" min="0" defaultValue="0" placeholder="Sets"/>
					<Input name="reps" ref={this.repsRef} type="number" min="0" defaultValue="0" placeholder="Repetitions"/>
					<Input name="rest" ref={this.restRef} type="number" min="0" defaultValue="0" placeholder="Rest time"/>
					<Button type="submit">Add Route</Button>
				</Form>

			</React.Fragment>
		);
	}
}

export default StrengthTrainingForm;