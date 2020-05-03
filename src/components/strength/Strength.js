import React, { useState, useEffect } from "react";
import StrengthTrainingForm from "./StrengthTrainingForm";
import StrengthExercise from "./StrengthExercise";
import TrainingPicker from "./../navbars/TrainingPicker";
import { HomeTraining, Section } from "./../../css/elements/TrainingPages";
import PropTypes from "prop-types";
import useDataApi from "./../hooks/useDataApi";

const Strength = props => {
  const path = props.location.pathname;
  const [isUpdatedFromDatabase, setIsUpdatedFromDatabase] = useState(false);

  const [{ data, isError }] = useDataApi(
    "http://localhost:8080/api/strength/exercise",
    isUpdatedFromDatabase
  );

  console.log(data);

  useEffect(() => {
    setIsUpdatedFromDatabase(false);
  }, [isUpdatedFromDatabase]);

  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeTraining className="strength-training">
        <StrengthTrainingForm
          setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
        />

        {isError && <div>Something went wrong ...</div>}
        <Section className="exercises">
          {!data ? (
            <div>Loading ...</div>
          ) : (
            data.data.map(key => (
              <StrengthExercise
                index={key._id}
                key={key._id}
                exerciseDetails={key}
                setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
              />
            ))
          )}
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
