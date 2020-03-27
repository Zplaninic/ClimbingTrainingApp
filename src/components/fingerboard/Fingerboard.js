/* eslint-disable class-methods-use-this */
import React, { useState, useContext } from "react";
import FingerboardForm from "./FingerBoardForm";
import FingerboardExercise from "./FingerboardExercise";

import TrainingPicker from "./../navbars/TrainingPicker";
import { AuthContext } from "../../context/auth";
import { firebaseConfig } from "./../../firebase";
import { useDataFromDataBase } from "./../../utils/dataBaseUtils";

const Fingerboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Auth = useContext(AuthContext);
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );

  const fingerExercises = useDataFromDataBase(
    user,
    setIsLoading,
    "fingerboard"
  );

  return (
    <div className="fingerboard-traning">
      <TrainingPicker />
      <h1>Fingerboard traning</h1>
      <div>{Auth.userID}</div>
      <FingerboardForm />
      <div className="fingerExercises">
        {isLoading &&
          fingerExercises !== undefined &&
          Object.keys(fingerExercises).map(key => (
            <FingerboardExercise
              index={key}
              key={key}
              fingerDetails={fingerExercises[key]}
              user={user}
            />
          ))}
      </div>
    </div>
  );
};

export default Fingerboard;
