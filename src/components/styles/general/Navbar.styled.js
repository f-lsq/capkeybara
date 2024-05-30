import styled from "styled-components";
import background from "../../../assets/images/main/backdrop.webp";
import sellerBackground from "../../../assets/images/main/seller-backdrop.webp";

export const StyledNavbar = styled.nav`
  // Mobile View
  background-color: #373B34;
  background-image: url(${background});
  color: white;
  display: flex;
  padding: 0 2rem;
  width: 100vw;
  position: fixed;
  z-index: 1000;

  #navCenter {
    font-family: Cute-Font;
    font-size: 25px;
    text-align: center;
    flex: 3;
  }

  #navLeft, #navRight {
    flex: 2;
    margin: auto 0;
  }
  
  .bi {
    font-size: 15px;
    cursor: pointer;
  } 

  ul {
    display: flex;
    list-style-type: none;
  }

  #navLeft .bi-list {
    display: block;
  } 

  #navLeft li {
    margin: auto;
    white-space: nowrap;
    margin: 0 10px 0 0;
  }

  #navRight ul {
    justify-content: flex-end;
    align-items: center;
  }

  #navRight li:first-of-type {
    font-size: 0.6rem;
    text-align: right;
    white-space: nowrap;

  }

  #navRight li button {
    border: none;
    background: none;
    color: white;
    cursor: pointer;
    font-size: 0.8rem;
    margin-top: 3px;
    font-weight: 600;
  }
  
  #navRight li {
    margin-left: 10px;
    position: relative;
  }

  #navRight li span {
    background: #FF6B17;
    border-radius: 100px;
    position: absolute;
    top: -6px;
    right: -9px;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #navRight li span p {
    font-size: 0.55rem;
    font-family: Aldrich;
    text-align: center;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .bi:hover,
  #navCenter a:hover,
  #navLeft a:hover,
  #navRight ul li span:hover + .cart-icon,
  #navRight ul li button:hover{
    color: #FFBA34;
    transition: color 0.5s;
  }

  #navlist-standard-view {
    display: none;
  }

  #navlist-mobile-view {
      position: absolute;
      top: 3.25em;
      flex-direction: column;
      background-color: #CCE2D3E6;
      border-radius: 0 0 10px 10px;
      padding: 10px;
      align-items: center;
      width: 80vw;
      font-size: 0.9rem;
      li {
        margin: 5px;
        white-space: wrap;
        text-align: center;
      }
      li a {
        color: black;
      }
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 3rem;
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    #navlist-mobile-view {
      display: none;
    }

    #navlist-standard-view {
      display: flex;
    }
    
    padding: 0 3rem;

    #navCenter {
      font-size: 30px;
    }

    .bi {
      font-size: 15px;
    } 

    #navLeft .bi-list {
      display: none;
    } 
    
    #navLeft li {
      display: flex;
      margin: 0 20px 0 0;
    }

    #navRight li {
      margin-left: 20px;
    }

    #navRight li:first-of-type {
      font-size: 0.7rem;
    }

    #navRight li button {
      font-size: 1rem;
    }
  }
  
  // Monitor View
  @media screen and (min-width: 1280px) {
    #navlist-mobile-view {
      display: none;
    }

    #navlist-standard-view {
      display: flex;
    }

    padding: 0 4rem;

    #navCenter {
      font-size: 40px;
    }

    .bi {
      font-size: 20px;
    } 

    #navLeft .bi-list {
      display: none;
    } 
    
    #navLeft li {
      display: flex;
      margin: 0 20px 0 0;
    }

    
    #navLeft li span {
      display: inline-block;
    }

    #navRight li {
      margin-left: 20px;
    }

    #navRight li:first-of-type {
      font-size: 0.7rem;
    }

    #navRight li button {
      font-size: 1rem;
    }
    
  }
`

export const StyledSellerNavbar = styled(StyledNavbar)`
  // Mobile View
  background-image: url(${sellerBackground});

  #navlist-mobile-view {
    background-color: #BEAFABE6;
  }

  #navRight li span {
    background: #D8C1BBE6;
    border-radius: 0px 0px 5px 5px;
    color: black;
    position: absolute;
    top: calc(15px/2 + 25px/2 + 0.83em);
    right: -1rem;
    height: auto;
    width: auto;
    padding: 20px 50px;
    white-space: nowrap;
    flex-direction: column;
    cursor: pointer;
  }

  #navRight li span img {
    width: 100%;
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    #navRight li span {
      top: calc(20px/2 + 30px/2 + 0.83em);
    }

    #navRight li span p {
      font-size: 0.6rem;
    }
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    #navRight li span {
      top: calc(32px/2 + 40px/2 + 0.83em);
    }

    #navRight li span p {
      font-size: 0.8rem;
    }
    
  }
`