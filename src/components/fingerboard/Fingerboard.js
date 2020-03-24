/* eslint-disable class-methods-use-this */
import React, { useState } from "react";
import FingerboardForm from "./FingerBoardForm";
import TrainingPicker from "./../navbars/TrainingPicker";

const Fingerboard = ({ userId }) => {
  const [sessions, setSession] = useState({});

  const addSession = session => {
    setSession({ ...sessions, [`Session${Date.now()}`]: session });
  };

  return (
    <div className="fingerboard-traning">
      <TrainingPicker />
      <h1>Fingerboard traning</h1>
      <FingerboardForm addSession={addSession} />
    </div>
  );
};

export default Fingerboard;
