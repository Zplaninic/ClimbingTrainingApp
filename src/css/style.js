import { createGlobalStyle } from "styled-components";
import { device } from "./device";

//https://jsramblings.com/how-to-use-media-queries-with-styled-components/

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
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

#wrapper {
  margin: 0 auto;
}
/* Small devices (tablets, 768px and up) */
@media ${device.mobileL} { 
  #wrapper {
      width: 97%;
      max-width: 767px;
  }
}

@media ${device.laptop} { 
  #wrapper {
    width: 97%;
    max-width: 2560px;
    float: none;
  }
}
`;
