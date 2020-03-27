import * as firebase from "firebase/app";
import firebaseApp from "../firebase";
import { useState, useEffect } from "react";

const db = firebaseApp.firestore();

export const updateField = (key, updateExercise, user, typeExercise) => {
  const exerciseDataRef = db.collection("users").doc(JSON.parse(user).uid);

  exerciseDataRef.set(
    { [typeExercise]: { [key]: updateExercise } },
    { merge: true }
  );
};

export const deleteField = (key, user, typeExercise) => {
  const exerciseDataRef = db.collection("users").doc(JSON.parse(user).uid);

  exerciseDataRef.set(
    { [typeExercise]: { [key]: firebase.firestore.FieldValue.delete() } },
    { merge: true }
  );
};

export const useDataFromDataBase = (user, setLoadingHook, type) => {
  const [routesFireStore, setRoutesFireStore] = useState();
  useEffect(() => {
    db.collection("users")
      .doc(JSON.parse(user).uid)
      .onSnapshot(function(doc) {
        if (doc.data()) {
          setRoutesFireStore(doc.data()[type]);
          setLoadingHook(true);
        }
      });
  }, [setLoadingHook, type, user]);

  return routesFireStore;
};

export const addExerciseToDatabse = (route, userID, exercise, name) => {
  db.collection("users")
    .doc(userID)
    .set(
      {
        [exercise]: { [`${name}${Date.now()}`]: route }
      },
      { merge: true }
    );
};
