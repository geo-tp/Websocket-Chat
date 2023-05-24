import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`

  html {

  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
    'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colorBG1} ;
    padding: 30px ;
  }

  & button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
