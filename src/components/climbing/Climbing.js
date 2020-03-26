import React, { useState, useContext, useEffect } from "react";
import ClimbingTrainingForm from "./ClimbingTrainingForm";
import ClimbingRoute from "./ClimbingRoute";
import Timer from "../tools/Timer";
import TrainingPicker from "./../navbars/TrainingPicker";
import { AuthContext } from "../../context/auth";
import firebaseApp from "./../../firebase";
import { firebaseConfig } from "./../../firebase";
const Climbing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Auth = useContext(AuthContext);
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );

  const useRoutesfromFirestore = () => {
    const [routesFireStore, setRoutesFireStore] = useState();
    useEffect(() => {
      firebaseApp
        .firestore()
        .collection("users")
        .doc(JSON.parse(user).uid)
        .onSnapshot(function(doc) {
          if (doc.data()) {
            setRoutesFireStore(doc.data().climbing);
            setIsLoading(true);
          }
        });
    }, []);

    return routesFireStore;
  };

  const updateRoute = (key, updatedRoute) => {
    const db = firebaseApp.firestore();
    const climbingDataRef = db.collection("users").doc(JSON.parse(user).uid);

    climbingDataRef.set({ climbing: { [key]: updatedRoute } }, { merge: true });
  };

  // const deleteRoute = key => {
  //   const db = firebaseApp.firestore();
  //   const climbingDataRef = db.collection("users").doc(JSON.parse(user).uid);

  //   climbingDataRef.set(
  //     { climbing: { [key]: firebaseApp.firestore.FieldValue.delete() } },
  //     { merge: true }
  //   );
  // };

  const routesCloud = useRoutesfromFirestore();

  return (
    <div className="training-program">
      <TrainingPicker />
      <h1>Climbing training</h1>
      <div>{Auth.userID}</div>

      <ClimbingTrainingForm />
      <div className="routes">
        {isLoading &&
          Object.keys(routesCloud).map(key => (
            <ClimbingRoute
              index={key}
              key={key}
              routeDetails={routesCloud[key]}
              updateRoute={updateRoute}
              // deleteRoute={deleteRoute}
            />
          ))}
      </div>
      <Timer />
    </div>
  );
};

export default Climbing;
