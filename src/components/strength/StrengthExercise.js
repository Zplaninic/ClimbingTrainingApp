import React from "react";
import PropTypes from "prop-types";
import { deleteFromMongo, updateMongo } from "./../../utils/db";
import styled from "styled-components";

const StrengthExercise = props => {
  const { date, muscles, type, sets, reps, rest } = props.exerciseDetails;

  const handleChange = e => {
    const updatedExercise = {
      ...props.exerciseDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateMongo(
      `${process.env.REACT_APP_API_URL}/strength/exercise/`,
      props.index,
      updatedExercise,
      props.setIsUpdatedFromDatabase
    );
  };

  return (
    <TableRow className="exercise">
      <TableCell>
        <CellInput
          type="text"
          name="date"
          onChange={handleChange}
          value={date}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="muscles"
          onChange={handleChange}
          value={muscles}
        />
      </TableCell>
      <TableCell>
        <TableCell
          type="text"
          name="type"
          onChange={handleChange}
          value={type}
        />
      </TableCell>
      <TableCell>
        <TableCell
          type="text"
          name="sets"
          onChange={handleChange}
          value={sets}
        />
      </TableCell>
      <TableCell>
        <TableCell
          type="text"
          name="reps"
          onChange={handleChange}
          value={reps}
        />
      </TableCell>
      <TableCell>
        <TableCell
          type="text"
          name="rest"
          onChange={handleChange}
          value={rest}
        />
      </TableCell>
      <ButtonCell>
        <RemoveButton
          onClick={() =>
            deleteFromMongo(
              `${process.env.REACT_APP_API_URL}/strength/exercise/`,
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

StrengthExercise.propTypes = {
  exerciseDetails: PropTypes.shape({
    date: PropTypes.string,
    muscles: PropTypes.string,
    type: PropTypes.string,
    sets: PropTypes.number,
    reps: PropTypes.number,
    rest: PropTypes.number
  }),
  index: PropTypes.string
};

export default React.memo(StrengthExercise);
