import React, { useState } from "react";
import ClimbingTrainingForm from "./ClimbingTrainingForm";
import ClimbingRoute from "./ClimbingRoute";
import TrainingPicker from "./../navbars/TrainingPicker";
import { firebaseConfig } from "./../../firebase";
import { useDataFromDataBase } from "./../../utils/dataBaseUtils";
import { HomeTraining, Section } from "./../../css/elements/TrainingPages";
import PropTypes from "prop-types";

const Climbing = props => {
  const [isLoading, setIsLoading] = useState(false);
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );
  const path = props.location.pathname;

  const routes = useDataFromDataBase(user, setIsLoading, "climbing");

  return (
    <React.Fragment>
      <TrainingPicker path={path} />
      <HomeTraining className="climbing-content">
        <ClimbingTrainingForm />
        <Section className="routes">
          {isLoading &&
            routes !== undefined &&
            Object.keys(routes).map(key => (
              <ClimbingRoute
                index={key}
                key={key}
                routeDetails={routes[key]}
                user={user}
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
