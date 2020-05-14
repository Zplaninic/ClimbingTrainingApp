import React from "react";
import styled from "styled-components";
import { device } from "./../../css/device";

const HeaderTable = props => {
  const cells = props?.cells;
  return (
    <TableHeader>
      {cells.map((key, i) => (
        <HeaderCell className={props.className} key={i}>
          {key}
        </HeaderCell>
      ))}
    </TableHeader>
  );
};

const TableHeader = styled.div`
  display: none;
  @media ${device.laptop} {
    display: table-row;
    width: 100%;
    background-color: #1a2229;
    color: #fff;
    line-height: 20px;
    font-size: 14px;
  }
`;

const HeaderCell = styled.div`
  @media ${device.laptop} {
    font-size: 14px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset !important;
    padding: 10px;
    display: table-cell;
    line-height: 20px;
    width: calc(1 / 6 * 100%);
    text-align: center;

    &.fingerboard-cell {
      width: calc(1 / 5 * 100%);
    }
  }
`;

export default HeaderTable;
