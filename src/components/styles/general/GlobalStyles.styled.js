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
    height: 100vh;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    
    h1 {
      font-family: Cute-Font;
      text-align: center;
      color: #78481C;
      font-size: 2rem;
    }
    
    img {
      width: 70vw;
    }
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .loading-screen {
      h1 {
        font-size: 3rem;
      }
      img {
        width: 60vw;
      }
    }
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    .loading-screen {
      h1 {
        font-size: 3.5rem;
      }
      img {
        width: 50vw;
      }
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    .loading-screen {
      h1 {
        font-size: 3.5rem;
      }
      img {
        width: 50vw;
      }
    }
  }

`