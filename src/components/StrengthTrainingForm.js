import React from 'react';

class StrengthTrainingForm extends React.Component {

	nameRef = React.createRef();
	typeRef = React.createRef();
	setsRef = React.createRef();
	repsRef = React.createRef();
	restRef = React.createRef();

	createExercise = (event) => {
		event.preventDefault();

		const route = {
    		name: this.nameRef.current.value,
    		type: this.typeRef.current.value,
    		sets: this.setsRef.current.value,
    		reps: this.repsRef.current.value,
    		rest: this.restRef.current.value
		};
		
			this.props.addExercise(route);

			event.currentTarget.reset();
	}
	
    render() {
		return (
            <form className="strength-exercise" onSubmit={this.createExercise}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
    			<input name="type" ref={this.typeRef} type="text" placeholder="Type of exercise(antagonist, core.."/>
    			<input name="sets" ref={this.setsRef} type="number" placeholder="Sets"/>
    			<input name="reps" ref={this.repsRef} type="number" placeholder="Repetitions"/>
                <input name="rest" ref={this.restRef} type="number" placeholder="Rest time"/>
    			<button type="submit">Add Route</button>
            </form>
		);
	}
}

export default StrengthTrainingForm;