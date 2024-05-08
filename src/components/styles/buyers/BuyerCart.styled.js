import styled from "styled-components";

export const StyledBuyerCart = styled.div`
// Mobile View
padding-top: 2.94em;

#cart-mobile-view {
  .cart-item {
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin: 2vh 5vw;
    box-shadow: 0 0 10px rgba(225, 225, 225, 1);
    height: 25vw;

    figure {
      width: 25vw;
      height: 100%;
      display: flex;
      justify-content: center;
      align-item: center;
    }

    figure img {
      width: 15vw;
      aspect-ratio: 1 / 1;
      object-fit: contain;
    }

    .cart-body {
      width: calc(100vw - 25vw);
      padding: 10px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    header, footer {
      display: flex;
      justify-content: space-between;
    }

    button {
      border: none;
      background: none;
    }

    header h2 {
      font-size: 0.7rem;
      width: calc(100vw - 25vw - 2*10px - 2*2rem);
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    footer {
      div {
        display: flex;
        align-items: center;
      }
      input {
        border: none;
        width: 2.5rem;
        text-align: center;
      }
    }


  }
}

#cart-standard-view {
  display: none;
}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {

}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  padding-top: 3.5em;
}

// Monitor View
@media screen and (min-width: 1280px) {
  padding-top: 4.69em;
  
}
`