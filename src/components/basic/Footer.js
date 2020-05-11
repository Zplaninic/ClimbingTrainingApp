import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterTag>
    <div>Copyright 2020</div>
    <a href="https://github.com/Zplaninic/ClimbingTrainingApp">
      Check the project at Github
    </a>
  </FooterTag>
);

const FooterTag = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  margin-left: 300px;
  font-size: 14px;
  padding: 5px;

  div {
    padding-bottom: 5px;
  }
`;

export default Footer;
