import React from "react";
import PropTypes from "prop-types";
import { deleteFromMongo, updateMongo } from "./../../utils/db";
import styled from "styled-components";

const ClimbingRoute = props => {
  const { date, name, grade, movements, type, restTime } = props.routeDetails;

  const handleChange = e => {
    e.preventDefault();

    const updatedRoute = {
      ...props.routeDetails,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateMongo(
      `${process.env.REACT_APP_API_URL}/climbing/route/`,
      props.index,
      updatedRoute,
      props.setIsUpdatedFromDatabase
    );
  };

  return (
    <TableRow className="route">
      <TableCell>
        <CellInput
          type="text"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="grade"
          value={grade}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="movements"
          value={movements}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="type"
          value={type}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <CellInput
          type="text"
          name="restTime"
          value={restTime}
          onChange={handleChange}
        />
      </TableCell>
      <ButtonCell>
        <RemoveButton
          onClick={() =>
            deleteFromMongo(
              `${process.env.REACT_APP_API_URL}/climbing/route/`,
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

ClimbingRoute.propTypes = {
  index: PropTypes.string.isRequired,
  routeDetails: PropTypes.shape({
    grade: PropTypes.string.isRequired,
    movements: PropTypes.string,
    name: PropTypes.string.isRequired,
    rest: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default React.memo(ClimbingRoute);
