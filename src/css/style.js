import { createGlobalStyle } from "styled-components";
import { device } from "./device";
import MontserratRegularWoff from "./../assets/fonts/montserrat-v14-latin-regular.woff";
import MontserratRegularWoffTwo from "./../assets/fonts/montserrat-v14-latin-regular.woff2";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src:
      url('${MontserratRegularWoff}') format('woff2'),
      url('${MontserratRegularWoffTwo}') format('woff');
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #F1DFCD;
  margin: 0px;
  padding: 0px;
}

h1,h2,h3 {
  font-weight: normal;
  color: #002962;
  margin: 0;
  text-align: center;
}

#root {
  margin: 0 auto;
}

/* Small devices (tablets, 768px and up) */
@media ${device.mobileL} { 
  #root {
      width: 97%;
      max-width: 767px;
  }
}

 /* Big devices (laptop 1024px and up) */
@media ${device.laptop} { 
  #root {
    width: 97%;
    max-width: 2560px;
    float: none;
  }
}
`;
