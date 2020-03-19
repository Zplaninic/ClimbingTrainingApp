import React, { useState } from "react";
import StrengthTrainingForm from "./StrengthTrainingForm";
import StrengthExercise from "./StrengthExercise";

const Strength = () => {
  const [exercises, setExercises] = useState({});

  const addExercise = exercise => {
    setExercises({ ...exercises, [`Route${Date.now()}`]: exercise });
  };

  const updateExercise = (key, updatedRoute) => {
    setExercises({ ...exercises, [key]: updatedRoute });
  };

  const deleteExercise = key => {
    delete exercises[key];
    setExercises({ ...exercises });
  };

  return (
    <div className="strength-training">
      <h2>STRENGTH TRAINING</h2>
      <StrengthTrainingForm addExercise={addExercise} />
      <ul className="exercises">
        {Object.keys(exercises).map(key => (
          <StrengthExercise
            index={key}
            key={key}
            exerciseDetails={exercises[key]}
            updateExercise={updateExercise}
            deleteExercise={deleteExercise}
          />
        ))}
      </ul>
    </div>
  );
};

export default Strength;
