import styled from "styled-components";

export const StyledSellerPopup = styled.div`
  background: #F0E6D9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh auto 10vh auto;
  width: 50%;
  padding: 5vh 3vw;
  border-radius: 20px;
  
  h1 {
    font-family: Aldrich;
    font-size: 2rem;
    margin-bottom: 2vh;
    text-align: center;
  }

  p {
    color: #474747;
    text-align: center;
    width: 70%;
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
    width: 20vw;
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