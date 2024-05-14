import styled from "styled-components";

export const StyledBuildAKeyboard = styled.main`

// Mobile View
  padding-top: 2.94em;
  margin: 0 10vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }

  article {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    margin: 0 5vw;

    h1 {
      font-family: Aldrich;
      text-align: center;
      font-size: 1.7rem;

      span {
        color: #F45C57;
        font-size: 2rem;
      }

    }
  
    p {
      text-align: justify;
      color: #1C1C1C;
      font-size: 1.1rem;
    }

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      
      button {
        border: none;
        background: none;
        font-weight: bold;
        position: relative;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.2s;

        .circle {
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          background: #F9DA69;
          aspect-ratio: 1 / 1;
          position: absolute;
          top: 50%;
          z-index: -1;
          transform: translate(-50%, -50%);
        }
      }

      button:hover {
        color: #49403D;
      }

      button:hover .circle {
        background-color: #F6D14F;
      }

      button:active .circle {
        background-color: #EBC641;
      }

      #build-shop-btn {
        background: #FFBB36;
        padding: 1vh 3vw;
        border-radius: 3px;
      }

      #build-shop-btn:hover {
        background: #FFC552;
      }

      #build-shop-btn:active {
        background: #E9A92C;
      }

    }
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding-top: 3.5em;
    flex-direction: row;

    img {
      width: 40vw;
      height: 75vh;
    }
    
    article {
      h1 {
        font-size: 2rem;
        text-align: left;

        span {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 1.2rem;
      }

      div {
        button {
          font-size: 1.3rem;

          .circle {
            height: 2.1rem;
            width: 2.1rem;
          }
        }
      }
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    padding-top: 4.69em;
    flex-direction: row;

    img {
      width: 40vw;
      height: 75vh;
    }

    article {
      h1 {
        font-size: 2.5rem;
        text-align: left;

        span {
          font-size: 3rem;
        }
      }

      p {
        font-size: 1.3rem;
      }

      div {
        button {
          font-size: 1.3rem;

          .circle {
            height: 2.4rem;
            width: 2.4rem;
          }
        }
      }
    }
    
  }

`