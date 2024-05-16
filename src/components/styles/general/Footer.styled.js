import styled from "styled-components";
import background from "../../../assets/images/main/backdrop.webp";
import sellerBackground from "../../../assets/images/main/seller-backdrop.webp";

export const StyledFooter = styled.footer`
  // Mobile View
  background-image: url(${background});
  padding: 8vh 5vw;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  
  figure,
  section {
    width: 40vw;
  }
  figure img {
    object-fit: contain;
    width: 100%;
  } 

  section div {
    display: flex;
    justify-content: space-evenly;

    li {
      list-style-type: none;
      font-size: 0.7rem;
      margin: 1vh;
    } 
  
    a {
      color: white;
      text-decoration: none;
      transition: color 0.5s;
    }
  
    a:hover {
      color: #FFBA34;
    }
  }

  section {
    p {
      font-size: 0.5rem;
      margin-top: 1vh;
    }
  }
  


  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    figure img {
      width: 90%;
    } 

    section div {
      li {
        font-size: 0.8rem;
        margin: 1.5vh;
      }
    }

    section {
      p {
        text-align: center;
        margin-top: 1.5vh;
        font-size: 0.6rem;
      }
    }

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    figure img {
       width: 80%;
    } 

    section div {
      li {
        font-size: 0.9rem;
        margin: 2vh;
      }
    }

    section {
      p {
        text-align: center;
        margin-top: 2vh;
        font-size: 0.7rem;
      }
    }

  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    figure img {
      width: 70%;
   } 

    section div {
      li {
        font-size: 1rem;
        margin: 2.5vh;
      }
    }

    section {
      p {
        text-align: center;
        margin-top: 2.5vh;
        font-size: 0.8rem;
      }
    }
    
  }

`

export const StyledSellerFooter = styled(StyledFooter)`
background-image: url(${sellerBackground});
`