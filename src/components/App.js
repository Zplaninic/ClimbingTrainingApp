import React, { Component } from "react";
import TrainingPicker from "./TrainingPicker";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="training">
        <div className="menu">
          <Login />
          <TrainingPicker history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default App;
