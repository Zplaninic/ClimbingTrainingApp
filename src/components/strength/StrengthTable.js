import React from "react";
import styled from "styled-components";
import useDataApi from "./../hooks/useDataApi";
import StrengthExercise from "./StrengthExercise";
import HeaderTable from "./../basic/HeaderTable";

const StrengthTable = props => {
  const [{ data, isError }] = useDataApi(
    `${process.env.REACT_APP_API_URL}/strength/exercise`,
    props.isUpdatedFromDatabase
  );
  const exercises = data?.data;

  return (
    <div>
      {!exercises ? (
        <div>Loading</div>
      ) : (
        <TableContainer>
          {exercises.length !== 0 ? (
            <Table>
              <HeaderTable
                className="strength-cell"
                cells={[
                  "Date",
                  "Type",
                  "Name",
                  "Sets",
                  "Repetitions",
                  "Rest (s)",
                  ""
                ]}
              ></HeaderTable>
              {exercises.map(key => (
                <StrengthExercise
                  index={key._id}
                  key={key._id}
                  exerciseDetails={key}
                  setIsUpdatedFromDatabase={props.setIsUpdatedFromDatabase}
                />
              ))}
            </Table>
          ) : (
            <div></div>
          )}
        </TableContainer>
      )}
    </div>
  );
};

const TableContainer = styled.div`
  width: 100%;
  border-radius: 7px;
  background: white;
  box-shadow: 0 3px 6px rgb(12, 12, 12);
`;

const Table = styled.div`
  display: table;
  width: 100%;
  border-radius: 7px;
`;

export default StrengthTable;
