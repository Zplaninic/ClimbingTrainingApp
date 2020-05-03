/* eslint-disable class-methods-use-this */
import React, { useState, useEffect } from "react";
import FingerboardForm from "./FingerBoardForm";
import FingerboardExercise from "./FingerboardExercise";
import TrainingPicker from "./../navbars/TrainingPicker";
import { HomeTraining, Section } from "./../../css/elements/TrainingPages";
import PropTypes from "prop-types";
import useDataApi from "./../hooks/useDataApi";

const Fingerboard = props => {
  const path = props.location.pathname;
  const [isUpdatedFromDatabase, setIsUpdatedFromDatabase] = useState(false);

  const [{ data, isError }] = useDataApi(
    "http://localhost:8080/api/fingerboard/session",
    isUpdatedFromDatabase
  );

  useEffect(() => {
    setIsUpdatedFromDatabase(false);
  }, [isUpdatedFromDatabase]);

  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeTraining className="fingerboard-traning">
        <FingerboardForm setIsUpdatedFromDatabase={setIsUpdatedFromDatabase} />

        {isError && <div>Something went wrong ...</div>}
        <Section className="fingerExercises">
          {!data ? (
            <div>Loading ...</div>
          ) : (
            data.data.map(key => (
              <FingerboardExercise
                index={key._id}
                key={key._id}
                fingerDetails={key}
                setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
              />
            ))
          )}
        </Section>
      </HomeTraining>
    </React.Fragment>
  );
};

Fingerboard.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Fingerboard;
