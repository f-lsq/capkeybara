import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  .loading-screen {
    padding-top: 2.94em;
    width: 100%;
    height: 100vh;
  }
  
  
  .loading-img {
      width: 70vw;
      display: block;
      margin: 20vh auto 0 auto;
  }

  .loading-font {
      font-family: Cute-Font;
      text-align: center;
      color: #78481C;
      font-size: 2rem;
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .loading-img {
      width: 60vw;
    }

    .loading-font {
        font-size: 3rem;
    }
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    .loading-screen {
      padding-top: 3.5em;
    }
    
    .loading-img {
      width: 50vw;
    }

    .loading-font {
        font-size: 3.5rem;
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    .loading-screen {
      padding-top: 4.69em;
    }
    
    .loading-img {
      width: 50vw;
    }

    .loading-font {
        font-size: 3.5rem;
    }
  }

`