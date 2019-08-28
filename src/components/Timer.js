/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import msToTime from '../helper';

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
    		<button onClick={this.startTimer}>start</button> :
    		null;
	  	const stop = (isOn) ?
    		<button onClick={this.stopTimer}>stop</button> :
    		null;
	  	const reset = (time !== 0 && !isOn) ?
    		<button onClick={this.resetTimer}>reset</button> :
    		null;
	  	const resume = (time !== 0 && !isOn) ?
    		<button onClick={this.startTimer}>resume</button> :
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
