import React, { useState } from "react";
import StrengthTrainingForm from "./StrengthTrainingForm";
import StrengthExercise from "./StrengthExercise";
import TrainingPicker from "./../navbars/TrainingPicker";
import { firebaseConfig } from "./../../firebase";
import { useDataFromDataBase } from "./../../utils/dataBaseUtils";
import { HomeTraining, Section } from "./../../css/elements/TrainingPages";
import PropTypes from "prop-types";

const Strength = props => {
  const [isLoading, setIsLoading] = useState(false);
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );
  const path = props.location.pathname;

  const exercises = useDataFromDataBase(user, setIsLoading, "strength");

  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeTraining className="strength-training">
        <StrengthTrainingForm />
        <Section className="exercises">
          {isLoading &&
            exercises !== undefined &&
            Object.keys(exercises).map(key => (
              <StrengthExercise
                index={key}
                key={key}
                exerciseDetails={exercises[key]}
                user={user}
              />
            ))}
        </Section>
      </HomeTraining>
    </React.Fragment>
  );
};

Strength.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Strength;
