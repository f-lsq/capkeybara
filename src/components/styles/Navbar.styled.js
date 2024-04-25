import styled from "styled-components";
import background from "../../assets/images/backdrop.jpg";

export const StyledNavbar = styled.nav`
  // Mobile View
  background-color: #373B34;
  background-image: url(${background});
  color: white;
  display: flex;
  padding: 0 1rem;
  border-radius: 0 0 10px 10px;

  #navCenter {
    font-family: Cute-Font;
    font-size: 40px;
    text-align: center;
    vertical-align: middle;
  }

  #navLeft, #navRight {
    flex: 1;
    margin: auto 0;
  }

  #navLeft li {
    margin: 0 auto;
  }

  ul {
    display: flex;
    list-style-type: none;
  }

  a:hover {
    color: #FFBA34;
    transition: color 0.5s;
  }

  a {
    color: white;
    text-decoration: none;
  }

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {

  }
  
  // Monitor View
  @media screen and (min-width: 1280px) {
    
  }
`