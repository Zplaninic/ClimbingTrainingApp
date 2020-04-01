import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterTag>
    <p>Copyright 2020</p>
  </FooterTag>
);

const FooterTag = styled.footer`
  text-align: center;
  background-color: #e7b060;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #ae493f;
  padding: 10px;
`;

export default Footer;
