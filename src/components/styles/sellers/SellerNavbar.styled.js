import styled from "styled-components";
import background from "../../../assets/images/seller-backdrop.webp";

export const StyledSellerNavbar = styled.nav`
  // Mobile View
  background-color: #373B34;
  background-image: url(${background});
  color: white;
  display: flex;
  padding: 0 2rem;
  width: 100vw;
  position: fixed;

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

  #navLeft .bi-x-circle {
    display: none;
  } 

  #navLeft li {
    display: none;
    margin: auto;
    white-space: nowrap;
    margin: 0 10px 0 0;
  }

  #navLeft li span {
    display: none;
  }

  #navRight ul {
    justify-content: flex-end;
  }
  
  #navRight li {
    margin-left: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .bi:hover,
  a:hover {
    color: #FFBA34;
    transition: color 0.5s;
  }



  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 3rem;
    
  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
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
  }
  
  // Monitor View
  @media screen and (min-width: 1280px) {
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
    
  }
`