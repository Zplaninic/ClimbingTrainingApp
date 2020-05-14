import React from "react";
import PropTypes from "prop-types";
import { updateMongo, deleteFromMongo } from "./../../utils/db";
import styled from "styled-components";
import { device } from "./../../css/device";

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
      <TableCell cellTitle="Date">
        <CellInput
          type="text"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell cellTitle="Sets number">
        <CellInput
          type="text"
          name="setsNumber"
          value={setsNumber}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell cellTitle="Work interval">
        <CellInput
          type="text"
          name="workInterval"
          value={workInterval}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell cellTitle="Rest time">
        <CellInput
          type="text"
          name="restInterval"
          value={restInterval}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell cellTitle="Pause between sets">
        <CellInput
          type="text"
          name="pauseBetweenSets"
          value={pauseBetweenSets}
          onChange={handleChange}
        />
      </TableCell>
      <ButtonCell className="last">
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
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    width: 100%;
    display: table-row;
  }
`;

const TableCell = styled.div`
  border-right: 1px solid #e4e7ea;
  border-top: 1px solid #e4e7ea;

  &:before {
    ${props => {
      return `content: "${props.cellTitle}"; 
              font-size: 12px;
              color: #00acac;
              line-height: 1.2;
              text-transform: uppercase;
              font-weight: unset!important;
              margin-top: 10px;
              margin-left: 20px;
              min-width: 98px;
              display: block;`;
    }}
  }

  @media ${device.laptop} {
    display: table-cell;

    &:before {
      content: none;
    }
  }
`;

const CellInput = styled.input`
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  width: 100%;
  line-height: 1.2;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;

  @media ${device.laptop} {
    color: #4e5c68;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
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
  margin-left: 15px;

  @media ${device.laptop} {
    margin-left: 5px;
  }
`;

const ButtonCell = styled.div`
  background-color: #ffffff;
  border-top: 1px solid #e4e7ea;

  &.last {
    border-bottom: 4px solid #e4e7ea;
  }

  @media ${device.laptop} {
    display: table-cell;

    &.last {
      border-bottom: none;
    }
  }
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
