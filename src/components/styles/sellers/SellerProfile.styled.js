import styled from "styled-components";

export const StyledSellerProfile = styled.main`
// Mobile View
width: 100%;

section {
  margin: 5vh auto 0 auto;
  background: #FFF7ED;
  width: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh;
  position: relative;
}

button {
  position: absolute;
  right: 5vh;
  display: flex;
  justify-content: center;
  border: none;
  background: #F4C68B;
  padding: 1vw;
  border-radius: 3px;
  cursor: pointer;
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}

figure img {
  width: 30%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 2px solid #6A4840;
}

figcaption {
  text-align: center;
  margin: 3vh 0;
}

figcaption h1 {
  font-size: 1rem;
}

figcaption h3 {
  margin-top: 0.5vh;
  color: #6A4840;
  font-size: 0.8rem;
  font-weight: 400;
}

article {
  display: flex;
}

article:first-of-type {
  height: 20vh;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 0.8rem;
}

article:last-of-type {
  flex-direction: row;
  justify-content: space-evenly;
  font-family: Cute-Font;
  width: 100%;
  text-align: center;
  color: #775343;
}

article:last-of-type h3 {
  font-size: 1.3rem;
}

article:last-of-type p {
  font-size: 3rem;
}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  section {
    width: 75%
  }

  figure img {
    width: 25%;
  }

  figcaption h1 {
    font-size: 1.3rem;
  }
  
  figcaption h3 {
    font-size: 0.9rem;
  }

  article:first-of-type {
    font-size: 0.9rem;
  }

  article:last-of-type h3 {
    font-size: 1.7rem;
  }
  
  article:last-of-type p {
    font-size: 4rem;
  }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  section {
    width: 60%
  }

  button {
    display: none;
  }

  figure img {
    width: 20%;
  }

  figcaption h1 {
    font-size: 1.5rem;
  }
  
  figcaption h3 {
    font-size: 1rem;
  }

  article:first-of-type {
    font-size: 1rem;
  }

  article:last-of-type h3 {
    font-size: 2rem;
  }
  
  article:last-of-type p {
    font-size: 5rem;
  }
}

// Monitor View
@media screen and (min-width: 1280px) {
  section {
    width: 60%
  }

  button {
    display: none;
  }

  figure img {
    width: 20%;
  }

  figcaption h1 {
    font-size: 1.5rem;
  }
  
  figcaption h3 {
    font-size: 1rem;
  }

  article:first-of-type {
    font-size: 1rem;
  }

  article:last-of-type h3 {
    font-size: 2rem;
  }
  
  article:last-of-type p {
    font-size: 5rem;
  }
}

`