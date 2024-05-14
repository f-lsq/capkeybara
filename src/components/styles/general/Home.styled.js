import styled from "styled-components";

export const StyledHome = styled.main`

// Mobile View
  padding-top: 2.94em;
  
  figure img:last-of-type {
    display: hidden;
  }

  figure:hover {
    cursor: pointer;
    
    img:first-of-type {
      display: none;
    }

    img:last-of-type {
      display: block;
    }
  } 

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding-top: 3.5em;
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    padding-top: 4.69em;
    
  }

`