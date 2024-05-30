import styled from "styled-components";

export const StyledSellerPopup = styled.div`
  // Mobile View
  background: #F0E6D9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh auto 10vh auto;

  padding: 5vh 3vw;
  border-radius: 20px;
  
  h1 {
    font-family: Aldrich;
    font-size: 1.5rem;
    margin-bottom: 2vh;
    text-align: center;
  }

  p {
    color: #474747;
    text-align: center;
    width: 70%;
  }

  p, button {
    font-size: 0.8rem;
  }

  button {
    border: none;
    padding: 2vh 3vw;
    border-radius: 3px;
    cursor: pointer;
    background: #6A4840;
    color: white;
    transition: 0.2s;
  }

  button:hover {
    background: #825C53;
  }

  button:active {
    background: #65443C;
  }

  img {
    width: 50vw;
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;
    
    img {
      width: 30vw;
    }
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 65%;

    h1 {
      font-size: 2rem;
    }

    p, button {
      font-size: 1rem;
    }

    img {
      width: 20vw;
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    width: 50%;

    h1 {
      font-size: 2rem;
    }

    p, button {
      font-size: 1rem;
    }

    img {
      width: 20vw;
    }
  }
`

export const StyledSellerDeletePopup = styled(StyledSellerPopup)`
img {
  margin: 3vh 0;
}
button:first-of-type{
  background: #97DD8C;
  color: black;
  margin-right: 2vw;
}

button:last-of-type{
  background: #DD8C8C;
  color: black;
}

button:first-of-type:hover{
  background: #A6EF9A;
}

button:last-of-type:hover{
  background: #EEA8A8;
}

button:first-of-type:active{
  background: #80C275;
}

button:last-of-type:active{
  background: #DC8585;
}


`