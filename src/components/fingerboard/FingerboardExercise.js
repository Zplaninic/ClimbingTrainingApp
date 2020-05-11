import React from "react";
import PropTypes from "prop-types";
import { updateMongo, deleteFromMongo } from "./../../utils/db";
import styled from "styled-components";

const FingerboardExercise = props => {
  const {
    date,
    setsNumber,
    workInterval,
    restInterval,
    pauseBetweenSets
  } = props.fingerDetails;

  const handleChange = e => {
    e.preventDefault();

    const updatedExercise = {
      ...props.fingerDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateMongo(
      `${process.env.REACT_APP_API_URL}/fingerboard/session/`,
      props.index,
      updatedExercise,
      props.setIsUpdatedFromDatabase
    );
  };

  return (
    <TableRow className="fingerBoardExercise">
      <TableCell>
        <CellInput
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="setsNumber"
          value={setsNumber}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="workInterval"
          value={workInterval}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="restInterval"
          value={restInterval}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="pauseBetweenSets"
          value={pauseBetweenSets}
          onChange={handleChange}
        />
      </TableCell>
      <ButtonCell>
        <RemoveButton
          onClick={() =>
            deleteFromMongo(
              `${process.env.REACT_APP_API_URL}/fingerboard/session/`,
              props.index,
              props.setIsUpdatedFromDatabase
            )
          }
        >
          &#10005;
        </RemoveButton>
      </ButtonCell>
    </TableRow>
  );
};

const TableRow = styled.div`
  width: 100%;
  display: table-row;
`;

const TableCell = styled.div`
  display: table-cell;
  border-right: 1px solid #e4e7ea;
  border-top: 1px solid #e4e7ea;
`;

const CellInput = styled.input`
  border: none;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  font-size: 13px;
  color: #4e5c68;
  line-height: 1.2;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

const RemoveButton = styled.button`
  border: none;
  padding: 5px;
  background-color: #ff5b57;
  color: #ffffff;
  font-size: 0.8em;
  cursor: pointer;
  border-radius: 50%;
  font-size: 13px;
  margin: 5px;
  height: 25px;
  width: 25px;
`;

const ButtonCell = styled.div`
  display: table-cell;
  background-color: #ffffff;
  border-top: 1px solid #e4e7ea;
`;

FingerboardExercise.propTypes = {
  index: PropTypes.string.isRequired,
  fingerDetails: PropTypes.shape({
    pauseBetweenSets: PropTypes.string.isRequired,
    restInterval: PropTypes.string.isRequired,
    date: PropTypes.string,
    setsNumber: PropTypes.string.isRequired,
    workInterval: PropTypes.string.isRequired
  })
};

export default React.memo(FingerboardExercise);
