import React, { useState } from "react";
import ClimbingTrainingForm from "./ClimbingTrainingForm";
import ClimbingRoute from "./ClimbingRoute";
import TrainingPicker from "./../navbars/TrainingPicker";
import { HomeTraining, Section } from "./../../css/elements/TrainingPages";
import { useDataFromMongo } from "./../../utils/db";
import PropTypes from "prop-types";

const Climbing = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatedFromDatase, setIsUpdatedFromDatabase] = useState(false);
  const path = props.location.pathname;

  const routes = useDataFromMongo(
    "http://localhost:8080/api/climbing/route",
    setIsLoading,
    isUpdatedFromDatase,
    setIsUpdatedFromDatabase
  );

  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeTraining className="climbing-content">
        <ClimbingTrainingForm
          setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
        />
        <Section className="routes">
          {isLoading &&
            routes.data !== undefined &&
            routes.data.map(key => (
              <ClimbingRoute
                index={key._id}
                key={key._id}
                routeDetails={key}
                setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
              />
            ))}
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
