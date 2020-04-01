import React from "react";
import styled from "styled-components";

const Header = () => (
  <header>
    <div>
      <LogoName>Climbing training</LogoName>
    </div>
  </header>
);

const LogoName = styled.p`
  font-family: "Monoton", cursive;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #c84104;
  margin-bottom: 1.5rem;
`;

export default Header;
