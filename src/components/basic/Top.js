import React from "react";
import styled from "styled-components";
import MonotonWoff from "./../../assets/fonts/monoton-v9-latin-regular.woff";
import MonotonWoffTwo from "./../../assets/fonts/monoton-v9-latin-regular.woff2";

const Top = () => {
  return (
    <Header>
      <LogoName>ClimbThe.Best</LogoName>
    </Header>
  );
};

const Header = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 4;
  background-color: #1a2229;
  height: 50px;
`;

const LogoName = styled.span`
@font-face {
    font-family: 'Monoton';
    font-style: normal;
    font-weight: 400;
    src:
      url('${MonotonWoff}') format('woff2'),
      url('${MonotonWoffTwo}') format('woff');
  }

  font-family: "Monoton",cursive;
  float: right;
  height: 100%;
  margin-right: 30px;
  margin-top: 5px;
  font-size: 24px;
  color: #16acac;
`;

export default Top;
