import React from 'react';
import Button from '../css/elements/Button'


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
            <form className="strength-exercise" onSubmit={this.createExercise}>
				<input name="date" ref={this.dateRef} type="date" />
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
    			<input name="type" ref={this.typeRef} type="text" placeholder="Type of exercise(antagonist, core.."/>
    			<input name="sets" ref={this.setsRef} type="number" placeholder="Sets"/>
    			<input name="reps" ref={this.repsRef} type="number" placeholder="Repetitions"/>
                <input name="rest" ref={this.restRef} type="number" placeholder="Rest time"/>
    			<Button type="submit">Add Route</Button>

            </form>
		);
	}
}

export default StrengthTrainingForm;