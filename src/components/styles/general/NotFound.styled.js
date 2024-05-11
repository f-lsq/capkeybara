import styled from "styled-components";

export const StyledNotFound = styled.main`
// Mobile View
padding-top: 2.94em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 2.94em);

  img {
    width: 70vw;
  }

  h1 {
    font-family: Aldrich;
    font-size: 3rem;
    color: #F45C57;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.7rem;
    color: #474747;
    margin: 2vh 20vw 5vh 20vw;
  }

  button {
    border: none;
    padding: 1.5vh 5vw; 
    border-radius: 2.5px;
    cursor: pointer;
    font-size: 0.7rem;
    background: #36CFFF;
  }

  button:hover {
    background: #5FD9FF;
  }

  button:active {
    background: #1DB6E6;
  }




// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  img {
    width: 60vw;
  }

  h1 {
    font-size: 4.2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin: 2vh 30vw 5vh 30vw;
  }

  p, button {
    font-size: 0.8rem;
  }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  padding-top: 3.5em;

  img {
    width: 40vw;
  }

  h1 {
    font-size: 4.5rem;
  }

  h3 {
    font-size: 1.7rem;
  }

  p {
    margin: 2vh 30vw 5vh 30vw;
  }

  p, button {
    font-size: 0.85rem;
  }
}

// Monitor View
@media screen and (min-width: 1280px) {
  padding-top: 4.69em;
  
  img {
    width: 30vw;
  }

  h1 {
    font-size: 4.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin: 2vh 30vw 5vh 30vw;
  }

  p, button {
    font-size: 0.9rem;
  }
}
`