import React from "react";
import styled from "styled-components";
import useDataApi from "./../hooks/useDataApi";
import ClimbingRoute from "./ClimbingRoute";
import HeaderTable from "./../basic/HeaderTable";
import { device } from "./../../css/device";

const ClimbingTable = props => {
  const [{ data, isError }] = useDataApi(
    `${process.env.REACT_APP_API_URL}/climbing/route`,
    props.isUpdatedFromDatabase
  );
  const routes = data?.data;

  return (
    <MainTableContainer>
      {!routes ? (
        <div>Loading</div>
      ) : (
        <TableContainer>
          {routes.length !== 0 ? (
            <Table>
              <HeaderTable
                className="climbing-cell"
                cells={[
                  "Date",
                  "Name",
                  "Grade",
                  "Movements",
                  "Type",
                  "Rest(s)",
                  ""
                ]}
              />
              {routes.map(key => (
                <ClimbingRoute
                  index={key._id}
                  key={key._id}
                  routeDetails={key}
                  setIsUpdatedFromDatabase={props.setIsUpdatedFromDatabase}
                />
              ))}
            </Table>
          ) : (
            <div></div>
          )}
        </TableContainer>
      )}
    </MainTableContainer>
  );
};

const MainTableContainer = styled.div`
  margin: 10px;

  @media ${device.laptop} {
    margin: 10px;
  }
`;

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

export default ClimbingTable;
