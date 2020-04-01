import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavbarHome = () => {
  return (
    <nav className="home-menu">
      <NavBarList>
        <List>
          <StyledLink to="/climbing">Climbing</StyledLink>
        </List>
        <List>
          <StyledLink to="/strength">Strength</StyledLink>
        </List>
        <List>
          <StyledLink to="/fingerboard">Fingerboard</StyledLink>
        </List>
        <List>
          <StyledLink to="/analysis">Analysis</StyledLink>
        </List>
        <List>
          <StyledLink to="/admin">Admin</StyledLink>
        </List>
      </NavBarList>
    </nav>
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
`;

const List = styled.li`
  width: 50%;
  float: left;
  padding: 5px 0;
`;

export default NavbarHome;
