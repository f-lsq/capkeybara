import styled from "styled-components";

export const StyledShop = styled.main`
  // Mobile View
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 6vw 4vw;

  article {
    margin: 2vw;
    width: calc((100vw - 4*3vw - 2*4vw) / 2);
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(235, 235, 235, 1);
    transition: 0.2s;
    cursor: pointer;
  }

  article:hover {
    box-shadow: 0 0 15px rgba(220, 220, 220, 1);
  }

  img {
    width: 100%;
    aspect-ratio: 1 /1;
    object-fit: contain;
    border-radius: 10px 10px 0 0;
  }

  section,
  section div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    height: 150px;
    justify-content: space-between;
  }

  h1 {
    text-align: center;
    font-size: 0.9em;
    color: #252525;
    font-family: Aldrich;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    padding: 0 10px;
    margin: 5px 0;
  }

  p {
    font-size: 0.7em;
    color: #686868;
  }

  h2 {
    font-family: Cute-Font;
    color: #2C4524;
    font-size: 1.7em;
  }

  button {
    margin: 2px 0 15px 0;
    background-color: #F9DA69;
    color: black;
    border: none;
    padding: 5% 8%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    white-space: nowrap;
    box-shadow: 0 2px 5px rgba(82, 52, 22, 0.2);
    transition: 0.2s;
    cursor: pointer;
  }

  button svg {
    margin-right: 10px;
  }

  button:hover {
    background-color: #F6D14F;
  }

  button:active {
    margin: calc(2px + 2px) 0 calc(15px - 2px) 0;
    background-color: #EBC641;
    box-shadow: 0 0 5px rgba(82, 52, 22, 0.2);
    
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
    padding: 6vw 3.5vw;

    article {
      margin: 2vw;
      width: calc((100vw - 6*2vw - 2*3.5vw) / 3);
    }

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    grid-template-columns: repeat(4, auto);
    padding: calc(3.5em + 2vw) 3.5vw;

    article {
      margin: 1.5vw;
      width: calc((100vw - 8*1.5vw - 2*3.5vw) / 4);
    }

    section {
      height: 160px;
    }

    h1 {
      font-size: 1em;
    }

    p {
      font-size: 0.8em;
    }

    h2 {
      font-size: 1.8em;
    }
  }
  
  // Monitor View
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, auto);
    padding: calc(4.69em + 2vw) 3.5vw;

    article {
      margin: 1.5vw;
      width: calc((100vw - 10*1.5vw - 2*3.5vw) / 5);
    }

    section {
      height: 160px;
    }

    h1 {
      font-size: 1em;
    }

    p {
      font-size: 0.8em;
    }

    h2 {
      font-size: 1.8em;
    }
  }
  }
`