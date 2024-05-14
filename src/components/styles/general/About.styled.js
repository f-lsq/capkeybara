import styled from "styled-components";

export const StyledAbout = styled.main`

// Mobile View
  padding: calc(10vh + 2.94em) 10vw 10vh 10vw;

  img {
    width: 60%;
    margin: 10vh auto;
    display: block;
  }

  h1, h2 {
    font-family: Aldrich;
  }

  h2 {
    margin: 5vh 0 1vh 0;
  }

  p {
    text-align: justify;
    margin: 3vh 0;
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding: calc(10vh + 3.5em) 10vw 10vh 10vw;
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    padding: calc(10vh + 4.69em) 10vw 10vh 10vw;
    
  }

`