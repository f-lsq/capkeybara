import styled from "styled-components";
import background from "../../../assets/images/main/backdrop.webp";

export const StyledHome = styled.main`

// Mobile View
  padding-top: 2.94em;
  
  figure  {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100vw 350px ;
    margin: auto;
    padding: 10vw;
    position: relative;

    h1 {
      font-family: Aldrich;
      text-align: center;
      margin: 20vh auto 10px auto;
      font-size: 1.5rem;
      width: 80%;
      color: white;

      span {
        color: #FFBA34;
        font-size: 1.8rem;
      }
    }

    img {
      width: 100%;
      object-fit: contain;
    }

    img:last-of-type {
      display: none;
    }

    svg {
      filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .7));
    }
    
    div {
      display: none;
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1rem;
      font-weight: bold;
      color: #FFC75B;
      text-shadow: 0px 3px 5px rgba(0, 0, 0, .7);
    }
  }

  figure:hover {
    cursor: pointer;
    
    img:first-of-type {
      display: none;
    }

    img:last-of-type {
      display: inline-block;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  } 

  #cta-buttons {
    width: 70vw;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
    margin: 0 auto 10vh auto;

    button {
      border: none;
      padding: 2vh 5vw; 
      margin-bottom: 2vh;
      border-radius: 10px;
      cursor: pointer;
      font-size: 0.8rem;
      color: white;
    }

    button:first-of-type {
      background: #A05C52;
    }

    button:last-of-type {
      background: #566554;
    }

    button:first-of-type:hover {
      background: #C17A6F;
    }

    button:last-of-type:hover {
      background: #70806E;
    }

    button:first-of-type:active {
      background: #8F4C42;
    }

    button:last-of-type:active {
      background: #4A5A48;
    }
  }

  #recommendation {
    padding: 0 10vw;
    margin-bottom: 10vh;

    h1 {
      font-family: Aldrich;
      text-align: center;
      font-size: 1.3rem;
    }

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5vh 0;

      img {
        width: 100px;
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          text-align: center;
          font-size: 1rem;
        }
        h2:first-of-type {
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 400;
        }

        h2:last-of-type {
          font-family: Cute-Font;
          color: #2C4524;
          font-size: 1.5rem;
          margin: 2vh 0;
        }
      }

      button {
        border: none;
        padding: 1vh 1.5vw;
        border-radius: 3px;
        background: #F9DA69;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        white-space: nowrap;
        transition: 0.2s;
        cursor: pointer;
        
        svg {
          margin-right: 10px;
        }
      }

      button:hover {
        background-color: #F6D14F;
      }
    
      button:active {
        background-color: #EBC641;
        
      }
    }
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    figure {
      h1 {
        font-size: 2rem;
        margin: 10vh auto 10px auto;
        width: 61%;

        span {
          font-size: 2.4rem;
        }
      }
    }

    #recommendation {
      padding: 0 20vw;

      img {
        width: 130px;
      }
    }
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding-top: 3.5em;

    figure {
      background-size: 100vw 400px;

      h1 {
        font-size: 3rem;
        margin: auto;
        width: 65%;

        span {
          font-size: 3.5rem;
        }
      }
      div {
        top: 60%;
        font-size: 1.3rem;
      }
    }

    #cta-buttons {
      margin: 0 auto 3vh auto;
      button {
        font-size: 1rem;
      }
    }

    #recommendation {
      display: flex;
      align-items: center;
      padding: auto;
      
      h1 {
        text-align: left;
        border-left: 3px solid #F4B886;
        padding-left: 1vw
      }

      img {
        width: 130px;
      }

      article {
        padding: 0 2vw;
      }
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    padding-top: 4.69em;
    
    
    figure {
      background-size: 100vw 450px;

      padding: 5vw 20vw;

      h1 {
        font-size: 4rem;
        margin: auto auto 10px auto;
        width: 80%;

        span {
          font-size: 5rem;
        }
      }

      div {
        top: 65%;
        font-size: 1.5rem;
      }
    }

    #cta-buttons {
      margin: 0 auto 3vh auto;
      button {
        font-size: 1rem;
      }
    }

    #recommendation {
      display: flex;
      align-items: center;
      padding: auto;
      
      h1 {
        text-align: left;
        border-left: 3px solid #F4B886;
        padding-left: 1vw
      }

      img {
        width: 200px;
      }

      h2:first-of-type {
        width: 60%;
      }

      article {
        padding: 0 2vw;
      }
    }
  }
  }

`