import React, { useState, useEffect } from "react";
import ClimbingTrainingForm from "./ClimbingTrainingForm";
import ClimbingRoute from "./ClimbingRoute";
import TrainingPicker from "./../navbars/TrainingPicker";
import { HomeTraining, Section } from "./../../css/elements/TrainingPages";
import PropTypes from "prop-types";
import useDataApi from "./../hooks/useDataApi";

const Climbing = props => {
  const path = props.location.pathname;
  const [isUpdatedFromDatabase, setIsUpdatedFromDatabase] = useState(false);

  const [{ data, isError }] = useDataApi(
    `${process.env.REACT_APP_API_URL}/climbing/route`,
    isUpdatedFromDatabase
  );

  useEffect(() => {
    setIsUpdatedFromDatabase(false);
  }, [isUpdatedFromDatabase]);

  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeTraining className="climbing-content">
        <ClimbingTrainingForm
          setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
        />

        {isError && <div>Something went wrong ...</div>}

        <Section className="routes">
          {!data ? (
            <div>Loading ...</div>
          ) : (
            data.data.map(key => (
              <ClimbingRoute
                index={key._id}
                key={key._id}
                routeDetails={key}
                setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
              />
            ))
          )}
        </Section>
      </HomeTraining>
    </React.Fragment>
  );
};

Climbing.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Climbing;
