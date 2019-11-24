import React, { Component } from "react";
import TrainingPicker from "./TrainingPicker";
import Logout from "./authentication/Logout";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <TrainingPicker />
        <Logout logout={this.props.logout} />
      </React.Fragment>
    );
  }
}

export default Home;
