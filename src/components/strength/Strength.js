import React, { useState, useContext } from "react";
import StrengthTrainingForm from "./StrengthTrainingForm";
import StrengthExercise from "./StrengthExercise";
import TrainingPicker from "./../navbars/TrainingPicker";
import { AuthContext } from "../../context/auth";
import { firebaseConfig } from "./../../firebase";
import { useDataFromDataBase } from "./../../utils/dataBaseUtils";

const Strength = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Auth = useContext(AuthContext);
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );

  const exercises = useDataFromDataBase(user, setIsLoading, "strength");

  return (
    <div className="strength-training">
      <TrainingPicker />
      <h2>STRENGTH TRAINING</h2>
      <div>{Auth.userID}</div>
      <StrengthTrainingForm />
      <ul className="exercises">
        {isLoading &&
          Object.keys(exercises).map(key => (
            <StrengthExercise
              index={key}
              key={key}
              exerciseDetails={exercises[key]}
              user={user}
            />
          ))}
      </ul>
    </div>
  );
};

export default Strength;
