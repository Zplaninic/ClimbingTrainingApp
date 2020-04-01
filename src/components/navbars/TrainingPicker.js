import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TrainingPicker = props => {
  // console.log(props.path);
  return (
    <div className="menu">
      <NavBarList>
        <List>
          <StyledLink className="climbing" path={props.path} to="/climbing">
            Climbing
          </StyledLink>
        </List>
        <List>
          <StyledLink className="strength" path={props.path} to="/strength">
            Strength
          </StyledLink>
        </List>
        <List>
          <StyledLink
            className="fingerboard"
            path={props.path}
            to="/fingerboard"
          >
            Fingerboard
          </StyledLink>
        </List>
        <List>
          <StyledLink to="/">Home</StyledLink>
        </List>
      </NavBarList>
    </div>
  );
};

const NavBarList = styled.ul`
  list-style-type: none;
  background-color: #e7b060
  padding: 0.75em;
  margin: 0;
  border-bottom: 3px solid #cc8850;
  overflow: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #c8331b;

  &.climbing {
    ${props => {
      if (props.path === "/climbing") {
        return "padding: 4px; border: 2px solid; border-radius: 13px; background-color: #83A8C3";
      }
    }}
  }

  &.fingerboard {
    ${props => {
      if (props.path === "/fingerboard") {
        return "padding: 4px; border: 2px solid; border-radius: 13px; background-color: #83A8C3";
      }
    }}
  }

  &.strength {
    ${props => {
      if (props.path === "/strength") {
        return "padding: 4px; border: 2px solid; border-radius: 13px; background-color: #83A8C3";
      }
    }}
  }
`;

const List = styled.li`
  width: 50%;
  float: left;
  padding: 5px 0;
`;

export default TrainingPicker;
