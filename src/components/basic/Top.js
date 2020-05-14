import React from "react";
import styled from "styled-components";
import MonotonWoff from "./../../assets/fonts/monoton-v9-latin-regular.woff";
import MonotonWoffTwo from "./../../assets/fonts/monoton-v9-latin-regular.woff2";
import { device } from "./../../css/device";
import Burger from "./../basic/Burger";

const Top = ({ open, setOpen }) => {
  return (
    <Header>
      <Burger open={open} setOpen={setOpen} />
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
  text-align: center;

  @media ${device.laptop} {
    text-align: none;
  }
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
  font-size: 24px;
  color: #16acac;
  display: block;
  margin-top: 7px;
  height: 100%;
  width: 93%;

  @media ${device.laptop} {
    width: 15%;
    float: right; 
    margin-right: 30px;
    padding-top: 0px;
  } 
`;

export default Top;
