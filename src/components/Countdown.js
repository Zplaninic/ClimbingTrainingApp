/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import '../css/countdown.css'
import Button from '../css/elements/Button'

class Countdown extends Component {
	state = {
		timerOn: false,
		timerStart: 0,
		timerTime: 0,
		setsStart: 0,
		setsTime: 0
	}

	startTimer = () => {
		this.setState({
			timerOn: true,
			timerTime: this.state.timerTime,
			timerStart: this.state.timerTime,
			setsStart: this.state.setsTime
		});
		do {
			this.timer = setInterval(() => {
				const newTime = this.state.timerTime - 10;
				if(newTime >= 0) {
					this.setState({
						timerTime: newTime
					});
				} else {
					this.setState({
						timerOn: false,
						timerTime: this.state.timerStart,
						setsTime: this.state.setsTime -1
					});
				}
			}, 10)
		} while (this.state.setsStart !== 0 && this.state.setsStart > 0 && this.state.setsTime >= 0);

	}

	stopTimer = () => {
		clearInterval(this.timer);
		this.setState({timerOn: false})
	};

	resetTimer = () => {
		if(this.state.timerOn === false) {
			clearInterval(this.timer);
			this.setState({
				timerStart: 0,
				timerTime: 0,
				setsTime: 0
			})
		};
	}

	adjustTimer = input => {
		const { timerTime, timerOn } = this.state;
		const max = 216000000;
		if (!timerOn) {
		  if (input === "incMinutes" && timerTime + 60000 < max) {
			this.setState({ timerTime: timerTime + 60000 });
		  } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
			this.setState({ timerTime: timerTime - 60000 });
		  } else if (input === "incSeconds" && timerTime + 1000 < max) {
			this.setState({ timerTime: timerTime + 1000 });
		  } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
			this.setState({ timerTime: timerTime - 1000 });
		  }
		}
	};

	adjustSets = input => {
		const {setsTime, timerOn}= this.state;
		const max = 100;
		if(!timerOn) {
			if(input === 'incSets' && setsTime < max) {
				this.setState({setsTime: setsTime + 1});
			} else if (input === 'decSets' && setsTime -1 >= 0) {
				this.setState({setsTime: setsTime - 1});
			}
		} 
	}
	
	render() {

		const {timerOn, timerStart, timerTime, setsTime} = this.state;
		let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
		let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
		
		return (
			<div className="Countdown">
				<div className="Countdown-header">Sets</div>
				<div className="Countdown-header">Number of Sets</div>
				<div className="Countdown-display">
					<Button onClick={() => this.adjustSets("incSets")}>&#8679;</Button>

					<div className="Countdown-time">{setsTime}</div> 

					<Button onClick={() => this.adjustSets("decSets")}>&#8681;</Button>
				</div>


				<div className="Countdown-header">Work Interval</div>
				<div className="Countdown-label">Minutes : Seconds</div>
				<div className="Countdown-display">
					<Button onClick={() => this.adjustTimer("incMinutes")}>&#8679;</Button>
					<Button onClick={() => this.adjustTimer("incSeconds")}>&#8679;</Button>

					<div className="Countdown-time">{minutes} : {seconds}</div> 

					<Button onClick={() => this.adjustTimer("decMinutes")}>&#8681;</Button>
					<Button onClick={() => this.adjustTimer("decSeconds")}>&#8681;</Button>
				</div>

				{timerOn === false && (timerStart === 0) && (
					<Button onClick={this.startTimer}>Start</Button>
				)}

				{timerOn === true && timerTime >= 1000 && (
					<Button onClick={this.stopTimer}>Stop</Button>
				)}

				{timerOn === false &&
					(timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
						<b>
							<Button onClick={this.startTimer}>Resume</Button>
						</b>
						
				)}

				{/* {(timerOn === false || timerTime < 1000) &&
					(timerStart !== timerTime && timerStart > 0) && (
						<button onClick={this.resetTimer}>Reset</button>
				)} */}
	
			</div>
		);
	}
}

export default Countdown;
