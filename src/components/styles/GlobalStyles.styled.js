import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0 0;
    box-sizing: border-box;
  }

  body {
    padding: 0 1%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`