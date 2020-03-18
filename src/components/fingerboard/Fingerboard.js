/* eslint-disable class-methods-use-this */
import React, { useState, useEffect } from "react";
import FingerboardForm from "./FingerBoardForm";
import base from "../../base";

const Fingerboard = ({ userId }) => {
  const [sessions, setSession] = useState({});

  // console.log(sessions);
  // useEffect(() => {
  //   const ref = base.syncState(`${this.props.userId}/fingerboard`, {
  //     context: this,
  //     state: "sessions"
  //   });
  // });

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }
  const addSession = session => {
    setSession({ ...sessions, [`Session${Date.now()}`]: session });
  };

  return (
    <div className="fingerboard-traning">
      <h1>Fingerboard traning</h1>
      <FingerboardForm addSession={addSession} />
    </div>
  );
};

export default Fingerboard;
