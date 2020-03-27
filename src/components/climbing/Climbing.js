import React, { useState, useContext, useEffect } from "react";
import ClimbingTrainingForm from "./ClimbingTrainingForm";
import ClimbingRoute from "./ClimbingRoute";
import Timer from "../tools/Timer";
import TrainingPicker from "./../navbars/TrainingPicker";
import { AuthContext } from "../../context/auth";
import { firebaseConfig } from "./../../firebase";
import { useDataFromDataBase } from "./../../utils/dataBaseUtils";

const Climbing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Auth = useContext(AuthContext);
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );

  const routes = useDataFromDataBase(user, setIsLoading, "climbing");

  return (
    <div className="training-program">
      <TrainingPicker />
      <h1>Climbing training</h1>
      <div>{Auth.userID}</div>

      <ClimbingTrainingForm />
      <div className="routes">
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
      </div>
      <Timer />
    </div>
  );
};

export default Climbing;
