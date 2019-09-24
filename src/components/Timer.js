/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { msToTime } from '../helper';
import Button from '../css/elements/Button';

class Timer extends Component {
	state = {
		time: 0,
		start: 0,
		isOn: false
	}

    startTimer = () => {
    	this.setState({
    		time: this.state.time,
    		start: Date.now() - this.state.time,
    		isOn: true
    	});
    	this.timer = setInterval(() => this.setState({
    		time: Date.now() - this.state.start
    	}), 1);
    }

    stopTimer = () => {
    	this.setState({ isOn: false });
    	clearInterval(this.timer);
    }

    resetTimer = () => {
    	this.setState({ time: 0 });
    }

    render() {
    	const { time, isOn } = this.state;

    	const start = (time === 0) ?
    		<Button onClick={this.startTimer}>start </Button> :
    		null;
	  	const stop = (isOn) ?
    		<Button onClick={this.stopTimer}>stop </Button> :
    		null;
	  	const reset = (time !== 0 && !isOn) ?
    		<Button onClick={this.resetTimer}>reset </Button> :
    		null;
	  	const resume = (time !== 0 && !isOn) ?
    		<Button onClick={this.startTimer}>resume </Button> :
    		null;

    	return (
    		<div className="timeR">
    			<h3>Time: {msToTime(time)}</h3>
    			{start}
    			{resume}
    			{stop}
    			{reset}
    		</div>
    	);
    }
}

export default Timer;
