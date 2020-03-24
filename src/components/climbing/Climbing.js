import React, { useState, useContext } from "react";
import ClimbingTrainingForm from "./ClimbingTrainingForm";
import ClimbingRoute from "./ClimbingRoute";
import Timer from "../tools/Timer";
import TrainingPicker from "./../navbars/TrainingPicker";
import { AuthContext } from "../../context/auth";

const Climbing = () => {
  const [routes, setRoutes] = useState({});
  const Auth = useContext(AuthContext);

  const addRoute = route => {
    setRoutes({ ...routes, [`Route${Date.now()}`]: route });
  };

  const updateRoute = (key, updatedRoute) => {
    setRoutes({ ...routes, [key]: updatedRoute });
  };

  const deleteRoute = key => {
    delete routes[key];
    setRoutes({
      ...routes
    });
  };

  return (
    <div className="training-program">
      <TrainingPicker />
      <h1>Climbing training</h1>
      <div>{Auth.userID}</div>
      <ClimbingTrainingForm addRoute={addRoute} />
      <div className="routes">
        {Object.keys(routes).map(key => (
          <ClimbingRoute
            index={key}
            key={key}
            routeDetails={routes[key]}
            updateRoute={updateRoute}
            deleteRoute={deleteRoute}
          />
        ))}
      </div>
      <Timer />
    </div>
  );
};

export default Climbing;
