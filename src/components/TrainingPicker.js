import React, { Component } from "react";
import { Link } from "react-router-dom";

class TrainingPicker extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <Link to="/climbing">Climbing</Link>
          </li>
          <li>
            <Link to="/strength">Strength</Link>
          </li>
          <li>
            <Link to="/fingerboard">Fingerboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default TrainingPicker;
