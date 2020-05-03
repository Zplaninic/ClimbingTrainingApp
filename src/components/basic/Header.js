import React from "react";
import styled from "styled-components";
import MonotonWoff from "./../../assets/fonts/monoton-v9-latin-regular.woff";
import MonotonWoffTwo from "./../../assets/fonts/monoton-v9-latin-regular.woff2";

const Header = () => (
  <header>
    <div>
      <LogoName>Climbing training</LogoName>
    </div>
  </header>
);

const LogoName = styled.p`
@font-face {
    font-family: 'Monoton';
    font-style: normal;
    font-weight: 400;
    src:
      url('${MonotonWoff}') format('woff2'),
      url('${MonotonWoffTwo}') format('woff');
  }

  font-family: "Monoton", cursive;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #c84104;
  margin-bottom: 1.5rem;
`;

export default Header;
