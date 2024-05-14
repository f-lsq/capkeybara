import styled from "styled-components";

export const StyledBuyerCheckout = styled.section`
  // Mobile View
  padding-top: 2.94em;
  margin-bottom: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 2.94em);


  img:first-of-type {
    width: 70vw;
  }

  img:last-of-type {
    width: 10vw;
  }
  
  h1 {
    font-family: Aldrich;
    font-size: 1.5rem;
    padding: 2vh 5vw 0.8vh 5vw;
  }

  p {
    font-size: 0.8rem;
    color: #474747;
    margin-bottom: 5vh;
  }

  div {
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;

    button {
      border: none;
      padding: 1.5vh 5vw; 
      margin-bottom: 2vh;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;
    }

    button:first-of-type {
      background: none;
    }
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    img:first-of-type {
      width: 60vw;
    }

    img:last-of-type {
      width: 8vw;
    }
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding-top: 3.5em;

    img:first-of-type {
      width: 40vw;
    }

    img:last-of-type {
      width: 6vw;
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    padding-top: 4.69em;

    img:first-of-type {
      width: 30vw;
    }

    img:last-of-type {
      width: 4vw;
    }
    
  }
`

export const StyledBuyerCheckoutSuccess = styled(StyledBuyerCheckout)`
  button:first-of-type {
    border: 2px solid #FFD436;
  }

  button:first-of-type:hover {
    background: #FFFAE8;
  }

  button:first-of-type:active {
    background: #FFF4CA;
  }

  button:last-of-type {
    background: #FFD436;
  }

  button:last-of-type:hover {
    background: #FFDA53;
  }

  button:last-of-type:active {
    background: #F1C72F;
  }
`

export const StyledBuyerCheckoutCancel = styled(StyledBuyerCheckout)`
  button:first-of-type {
    border: 2px solid #36CFFF;
  }

  button:first-of-type:hover {
    background: #EBFAFF;
  }

  button:first-of-type:active {
    background: #CCF3FF;
  }

  button:last-of-type {
    background: #36CFFF;
  }

  button:last-of-type:hover {
    background: #5FD9FF;
  }

  button:last-of-type:active {
    background: #1DB6E6;
  }

`
