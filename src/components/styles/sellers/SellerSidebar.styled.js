import styled from "styled-components";

export const StyledSellerSidebar = styled.aside`

 // Mobile View
  background: #EAE0D3;
  height: calc(100vh - 4.7rem);
  width: 15vw;
  padding: 1.5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration:none;
    color: black;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  figure img {
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border: 1.5px solid #6A4840;
  }

  figure figcaption {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  figure figcaption p:first-child {
    font-weight: bold;
  }

  figure figcaption p:last-child {
    font-size: 0.7rem;
    color: #6A4940;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: 15% 0;
  }

  nav ul {
      list-style-type: none;
  }

  nav ul li a {
    display: flex;
    align-items: center;
    padding: 8px 18px;
    border-radius: 5px;
    margin: 10px;
    transition: 0.2s;
  }

  nav ul li a:hover {
    background: #DCAC6C;
  }

  nav ul li a svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }




 // Tablet View
 @media screen and (min-width: 481px) and (max-width: 768px) {

 }

 // Laptop View
 @media screen and (min-width: 769px) and (max-width: 1279px) {

 }
 
 // Monitor View
 @media screen and (min-width: 1280px) {
  width: 12vw;
 }
`