import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./../../css/device";
import NavImage from "./../basic/NavImage";

const TrainingPicker = props => {
  return (
    <Nav className="menu">
      <NavBarList>
        <NavImage></NavImage>
        <List>
          <StyledLink className="home" path={props.path} to="/">
            Home
          </StyledLink>
        </List>
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
          <StyledLink to="/">Analysis (coming...)</StyledLink>
        </List>
        <List>
          <StyledLink to="/">Calendar (coming...)</StyledLink>
        </List>
        <List>
          <StyledLink to="/">Note (coming...)</StyledLink>
        </List>
        <List>
          <StyledLink to="/">Test (coming...)</StyledLink>
        </List>
      </NavBarList>
    </Nav>
  );
};

const Nav = styled.nav`
  z-index: 3;
  width: 200px;
  display: block;
  position: fixed !important;
  height: 100%;
  background-color: #2d353c;
`;

const NavBarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  /* border-bottom: 3px solid #cc8850; */
  overflow: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;

  &.home {
    ${props => {
      if (props.path === "/") {
        return "padding: 6px; border: 1px solid; border-radius: 13px; background-color: #F9F871; color: #2d353c";
      }
    }}
  }

  &.climbing {
    ${props => {
      if (props.path === "/climbing") {
        return "padding: 6px; border: 1px solid; border-radius: 13px; background-color: #F9F871; color: #2d353c";
      }
    }}
  }

  &.fingerboard {
    ${props => {
      if (props.path === "/fingerboard") {
        return "padding: 6px; border: 1px solid; border-radius: 13px; background-color: #F9F871; color: #2d353c";
      }
    }}
  }

  &.strength {
    ${props => {
      if (props.path === "/strength") {
        return "padding: 6px; border: 1px solid; border-radius: 13px; background-color:#F9F871; color: #2d353c";
      }
    }}
  }
`;

const List = styled.li`
  width: 100%;
  float: none;
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
  padding: 13px;

  /* Small devices (tablets, 768px and up) */
  @media ${device.mobileL} {
    /* display: inline-block;
    width: auto;
    float: none;
    padding: 0em 1em; */
  }
`;

export default React.memo(TrainingPicker);
