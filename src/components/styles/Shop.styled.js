import styled from "styled-components";

export const StyledShop = styled.main`
  // Mobile View
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 0 3vw;

  article {
    margin: 3vw;
    width: calc((100vw - 6*3vw) / 2);
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(219, 225, 219, 1);
  }

  img {
    width: 100%;
    aspect-ratio: 1 /1;
    object-fit: contain;
    border-radius: 5px 5px 0 0;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-size: 0.9rem;
    color: #252525;
    font-family: Aldrich;
  }

  p {
    font-size: 0.9rem;
    color: #686868;
  }

  h2 {
    font-family: Cute-Font;
    color: #2C4524;
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(3, auto);

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    grid-template-columns: repeat(4, auto);
  }
  
  // Monitor View
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, auto);
  }
`