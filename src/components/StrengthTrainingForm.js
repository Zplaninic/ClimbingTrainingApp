import React from 'react';
import Button from '../css/elements/Button';
import { Form, Input, Select} from '../css/elements/FormInput';


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
		
			this.props.addExercise(exercise);

			event.currentTarget.reset();
	}
	
    render() {
		return (
            <Form className="strength-exercise" onSubmit={this.createExercise}>
				<Input name="date" ref={this.dateRef} type="date" />
				<Select ref={this.nameRef}>
						<option value="antagonist" >Antagonist</option>
						<option value="core">Core</option>
						<option value="upperBoady">Upper body</option>
						<option value="flexibility">Flexibility</option>
				</Select>
    			<Input name="type" ref={this.typeRef} type="text" placeholder="Exercise"/>
    			<Input name="sets" ref={this.setsRef} type="number" placeholder="Sets"/>
    			<Input name="reps" ref={this.repsRef} type="number" placeholder="Repetitions"/>
                <Input name="rest" ref={this.restRef} type="number" placeholder="Rest time"/>
    			<Button type="submit">Add Route</Button>
            </Form>
		);
	}
}

export default StrengthTrainingForm;