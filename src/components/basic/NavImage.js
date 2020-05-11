import React from "react";
import styled from "styled-components";
import logo from "./../../assets/images/climbTheBestLogo.png";

const NavImage = () => (
  <ImageContainer>
    <Img src={logo} alt="Climb the best logo"></Img>
  </ImageContainer>
);

const ImageContainer = styled.div`
  width: 200px;
  height: 90px;
  margin-top: 50px;
  text-align: center;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
  padding: 5px;
`;

export default NavImage;
