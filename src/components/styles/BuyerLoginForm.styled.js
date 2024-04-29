import styled from "styled-components";
import buyerAuthBackground from "../../assets/images/buyer-auth.jpeg"

export const StyledBuyerLoginForm = styled.div`
// Mobile View
display: flex;

div {
  height: calc(100vh - 2.94em);
}


div:last-child {
  width: 100vw;
}

h1 {
  font-family: Aldrich;
}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {

}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  div {
    height: calc(100vh - 3.5em);
  }

  div:first-child {
    width: 50vw;
    background: url(${buyerAuthBackground}) center;
    background-size: auto 100%;
  }

  div:last-child {
    width: 50vw;
  }
  
}

// Monitor View
@media screen and (min-width: 1280px) {
  div {
    height: calc(100vh - 4.7em);
  }

  div:first-child {
    width: 50vw;
    background: url(${buyerAuthBackground}) center;
    background-size: auto 100%;
  }

  div:last-child {
    width: 50vw;
  }
  
  
}

`

