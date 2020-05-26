import React, { Component } from "react";
import "../../css/countdown.css";
import Button, { CountdownButtons } from "../../css/elements/Button";
import UIfx from "uifx";
import countdownAlarm from "../../assets/sounds/countdownAlarm.mp3";

const endCountdown = new UIfx(countdownAlarm, {
  volume: 1.0,
  throttleMs: 40
});

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    startButtonClicked: false
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      startButtonClicked: true
    });
    do {
      this.timer = setInterval(() => {
        const newTime = this.state.timerTime - 10;
        if (newTime >= 0) {
          this.setState({
            timerTime: newTime
          });
        } else {
          endCountdown.play();
          this.stopTimer();
          this.setState({
            timerOn: false,
            timerTime: this.state.timerStart,
            startButtonClicked: false
          });
        }
      }, 10);
    } while (this.state.timerTime === 0 && this.state.timerOn === false);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    if (this.state.timerOn === false) {
      clearInterval(this.timer);
      this.setState({
        timerStart: 0,
        timerTime: 0,
        startButtonClicked: false
      });
    }
  };

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

  render() {
    const { timerOn, timerStart, timerTime, startButtonClicked } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Work Interval</div>
        <div className="Countdown-label">Minutes : Seconds</div>
        <div className="Countdown-content">
          <div className="Countdown-display">
            <Button onClick={() => this.adjustTimer("incMinutes")}>
              &#8679;
            </Button>
            <Button onClick={() => this.adjustTimer("incSeconds")}>
              &#8679;
            </Button>

            <div className="Countdown-time">
              {minutes} : {seconds}
            </div>

            <Button onClick={() => this.adjustTimer("decMinutes")}>
              &#8681;
            </Button>
            <Button onClick={() => this.adjustTimer("decSeconds")}>
              &#8681;
            </Button>
          </div>
          <div className="Buttons-display">
            {timerOn === false &&
              timerTime !== 0 &&
              startButtonClicked === false && (
                <CountdownButtons onClick={this.startTimer}>
                  Start
                </CountdownButtons>
              )}
            {timerOn === true && timerTime >= 1000 && (
              <CountdownButtons onClick={this.stopTimer}>Stop</CountdownButtons>
            )}
            {timerOn === false &&
              timerStart !== 0 &&
              timerStart !== timerTime &&
              timerTime !== 0 &&
              startButtonClicked === true && (
                <b>
                  <CountdownButtons onClick={this.startTimer}>
                    Resume
                  </CountdownButtons>
                </b>
              )}
            {timerOn === false && timerTime !== 0 && (
              <CountdownButtons onClick={this.resetTimer}>
                Reset
              </CountdownButtons>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
