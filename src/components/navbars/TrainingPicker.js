import React from "react";
import { Link } from "react-router-dom";

const TrainingPicker = () => {
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
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default TrainingPicker;
