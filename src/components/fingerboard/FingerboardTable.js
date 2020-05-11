import React from "react";
import styled from "styled-components";
import useDataApi from "./../hooks/useDataApi";
import FingerboardExercise from "./FingerboardExercise";
import HeaderTable from "./../basic/HeaderTable";

const FingerboardTable = props => {
  const [{ data, isError }] = useDataApi(
    `${process.env.REACT_APP_API_URL}/fingerboard/session`,
    props.isUpdatedFromDatabase
  );
  const sessions = data?.data;

  return (
    <div>
      {!sessions ? (
        <div>Loading</div>
      ) : (
        <TableContainer>
          {sessions.length !== 0 ? (
            <Table>
              <HeaderTable
                className="fingerboard-cell"
                cells={[
                  "Date",
                  "Number of sets",
                  "Work interval",
                  "Rest time",
                  "Pause between sets",
                  ""
                ]}
              ></HeaderTable>
              {sessions.map(key => (
                <FingerboardExercise
                  index={key._id}
                  key={key._id}
                  fingerDetails={key}
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

export default FingerboardTable;
