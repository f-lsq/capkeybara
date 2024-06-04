import styled from "styled-components";

export const StyledSellerProductForm = styled.main`
  // Mobile View
  margin: 3vh auto 0 auto;

  h1 {
    font-size: 1.2rem;
  }
  
  button {
    border: none;
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 1vh 2vw;
    border-radius: 3px;
    cursor: pointer;
    
  }

  button svg {
    margin-right: 0.5vw;
  }

  .backSubmitBtn {
    display: flex;
    justify-content: flex-end;
    width: 90vw;
  }

  .backSubmitBtn button span {
    display: none;
  }

  button:first-of-type {
    background: #DBCDCA;
    transition: 0.2s;
  }

  button:last-of-type {
    background: #AA7F73;
    color: white;
    margin-left: 1vw;
    transition: 0.2s;
  }

  button:first-of-type:hover {
    background: #e9dad7;
  }

  button:last-of-type:hover {
    background: #b48c81;
  }

  button:first-of-type:active {
    background: #cabab6;
  }

  button:last-of-type:active {
    background: #8b645a;
  }

  .formBody {
    display: flex;
    width: 90vw;
    justify-content: space-between;
    margin-top: 2vh;
    flex-direction: column;
  }

  .formBody label {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  .formLeft,
  .formRight {
    background: #FFF7ED;
    width: 100%;
    border-radius: 20px;
    padding: 3vh 2vw;
    margin-bottom: 3vh;
  }

  .formLeft div,
  .formRight div {
    display: flex;
    flex-direction: column;
  }

  .formLeft div input,
  .formLeft div select,
  .formRight div textarea {
    border: 1px solid #F1F1F1;
    margin: 1vh 0 3vh 0;
    font-family: Roboto, san-serif;
    padding: 1vh 2vw;
    border-radius: 2px;
  }

  .formLeft div input:focus,
  .formRight div textarea:focus,
  .formLeft div select:focus {
    outline: 2px solid #e1b55f;
  }

  .formLeft div input,
  .formLeft div select {
    height: 5vh;
  }

  .formBody div p {
    color: red;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -0.7rem 0 -0.15rem 0;
  }

  .formRight div img {
    width: 50%;
    display: block;
    margin: 1vh auto 3vh auto;
  }

  .formRight div button {
    background: #DDB38C;
    color: black;
    width: 50%;
    margin: 0 auto 3vh auto;
    padding: 0.5vh;
    border-radius: 100px;
  }

  .formRight div button:hover {
    background: #e7c29f;
  }

  .formRight div button:active {
    background: #cc9f75;
  }

  .formRight div textarea {
    height: 20vh;
    resize:none;
  }

    // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .backSubmitBtn button span {
      display: inline-block;
    }
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    .backSubmitBtn {
      width: 80vw;
    }

    .backSubmitBtn button span {
      display: inline-block;
    }
    
    .formBody {
      width: 80vw;
      flex-direction: row;
    }

    .formLeft,
    .formRight {
      width: 49%;
      margin-bottom: 0;
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    .backSubmitBtn {
      width: 80vw;
    }

    .backSubmitBtn button span {
      display: inline-block;
    }

    .formBody {
      width: 80vw;
      flex-direction: row;
    }

    .formBody label {
      margin-top: 0;
    }

    .formLeft,
    .formRight {
      width: 49%;
      margin-bottom: 0;
    }
  }

`