import React, { useState, useEffect } from "react";
import ClimbingTrainingForm from "./ClimbingTrainingForm";
import TrainingPicker from "./../navbars/TrainingPicker";
import PropTypes from "prop-types";
import styled from "styled-components";
import Countdown from "./../tools/Countdown";
import ClimbingTable from "./ClimbingTable";

const Climbing = props => {
  const path = props.location.pathname;
  const [isUpdatedFromDatabase, setIsUpdatedFromDatabase] = useState(false);

  useEffect(() => {
    setIsUpdatedFromDatabase(false);
  }, [isUpdatedFromDatabase]);

  return (
    <React.Fragment>
      <TrainingPicker path={path} />

      <TrainingContainer className="container">
        <TrainingContent className="climbing-content">
          <ClimbingTrainingForm
            setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
          />
          <TimerContainer>
            <Countdown />
          </TimerContainer>

          <TableTraining className="routes">
            <ClimbingTable
              isUpdatedFromDatabase={isUpdatedFromDatabase}
              setIsUpdatedFromDatabase={setIsUpdatedFromDatabase}
            ></ClimbingTable>
          </TableTraining>
        </TrainingContent>
      </TrainingContainer>
    </React.Fragment>
  );
};

const TableTraining = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 4;
  padding: 20px 20px 20px 0px;
`;

const TrainingContainer = styled.div`
  margin-top: 50px;
`;

const TimerContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 6;
  padding: 20px;
`;

const TrainingContent = styled.div`
  padding-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 200px 1fr 0.5fr 0.25fr 0.25fr;
  grid-template-rows: 450px auto 30px;
  grid-gap: 2em;
`;

Climbing.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Climbing;
