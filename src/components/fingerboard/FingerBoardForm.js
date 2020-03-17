import React, { useState } from "react";
import Button from "../../css/elements/Button";
import PropTypes from "prop-types";

const FingerBoardForm = ({ addSession }) => {
  const [fingerBoardSession, setFingerBoardState] = useState({
    setsNumber: "",
    workInterval: "",
    restInterval: "",
    pauseBetweenSets: ""
  });

  const updateFingerBoardSession = e => {
    setFingerBoardState({
      ...fingerBoardSession,
      [e.target.name]: e.target.value
    });
  };

  const createSession = event => {
    event.preventDefault();

    addSession(fingerBoardSession);

    setFingerBoardState({
      setsNumber: "",
      workInterval: "",
      restInterval: "",
      pauseBetweenSets: ""
    });
  };

  return (
    <form className="fingerboard-training" onSubmit={createSession}>
      <input
        name="setsNumber"
        type="number"
        placeholder="Sets"
        value={fingerBoardSession.setsNumber}
        onChange={updateFingerBoardSession}
      />
      <input
        name="workInterval"
        type="number"
        placeholder="Work interval"
        value={fingerBoardSession.workInterval}
        onChange={updateFingerBoardSession}
      />
      <input
        name="restInterval"
        type="number"
        placeholder="Rest interval"
        value={fingerBoardSession.restInterval}
        onChange={updateFingerBoardSession}
      />
      <input
        name="pauseBetweenSets"
        type="number"
        placeholder="Pause time"
        value={fingerBoardSession.pauseBetweenSets}
        onChange={updateFingerBoardSession}
      />
      <Button type="submit">Add Session</Button>
    </form>
  );
};

FingerBoardForm.propTypes = {
  addSession: PropTypes.func
};

export default FingerBoardForm;
