import React from 'react';

class StrengthTrainingForm extends React.Component {
    render() {
		return (
            <form className="strength-exercise">
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
    			<input name="type" ref={this.type} type="text" placeholder="Type of exercise(antagonist, core.."/>
    			<input name="sets" ref={this.sets} type="number" placeholder="Sets"/>
    			<input name="reps" ref={this.reps} type="number" placeholder="Repetitions"/>
                <input name="rest" ref={this.rest} type="number" placeholder="Rest time"/>
    			<button type="submit">Add Route</button>
            </form>
		);
	}
}

export default StrengthTrainingForm;