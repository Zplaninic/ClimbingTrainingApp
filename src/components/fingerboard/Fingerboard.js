/* eslint-disable class-methods-use-this */
import React, { useState } from "react";
import FingerboardForm from "./FingerBoardForm";
import FingerboardExercise from "./FingerboardExercise";
import TrainingPicker from "./../navbars/TrainingPicker";
import { firebaseConfig } from "./../../firebase";
import { useDataFromDataBase } from "./../../utils/dataBaseUtils";
import { HomeTraining, Section } from "./../../css/elements/TrainingPages";

const Fingerboard = props => {
  const path = props.location.pathname;
  const [isLoading, setIsLoading] = useState(false);
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );

  const fingerExercises = useDataFromDataBase(
    user,
    setIsLoading,
    "fingerboard"
  );

  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeTraining className="fingerboard-traning">
        <FingerboardForm />
        <Section className="fingerExercises">
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
        </Section>
      </HomeTraining>
    </React.Fragment>
  );
};

export default Fingerboard;
