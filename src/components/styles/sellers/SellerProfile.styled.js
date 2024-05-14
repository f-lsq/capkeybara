import styled from "styled-components";

export const StyledSellerProfile = styled.main`
width: 100%;

section {
  margin: 5vh auto 0 auto;
  background: #FFF7ED;
  width: 60%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh;
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}

figure img {
  width: 20%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 2px solid #6A4840;
}


figcaption {
  text-align: center;
  margin: 3vh 0;
}

figcaption h3 {
  margin-top: 0.5vh;
  color: #6A4840;
  font-size: 1rem;
  font-weight: 400;
}

article {
  display: flex;
}

article:first-of-type {
  height: 20vh;
  flex-direction: column;
  justify-content: space-evenly;
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
  font-size: 2rem;
}

article:last-of-type p {
  font-size: 5rem;
}

`