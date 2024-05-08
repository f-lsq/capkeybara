import styled from "styled-components";

export const StyledBuyerCart = styled.div`
// Mobile View
padding-top: 2.94em;

h1 {
  font-family: Aldrich;
  position: relative;
  text-align: center;
  padding: 2vh 5vw;

  span {
    position: absolute;
    display: flex;
    align-items: center;
  }

  a {
    color: black;
    transition: 0.2s;
  }

  a:hover {
    color: #FFBA34;
  }
}


button {
  border: none;
  background: none;
  display: flex;
  align-items: center;
}

#cart-mobile-view {
  padding-bottom: calc(2vh + 4*0.75rem + 2*2.5px + 10px + 2*10px);
  
  h1 {
    font-size: 1rem;
    padding-bottom: 0;
  }

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


    header button {
      color: #CC935E;
    }

    header h2 {
      font-size: 0.7rem;
      width: calc(100vw - 25vw - 2*10px - 2*2.5rem);
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      font-weight: 400;
    }

    header div {
      display: flex;
      button {
        margin-left: 10px;
      }

      button:first-of-type {
        color: #5E8C6C;
      }

      button:last-of-type {
        color: #FF1A1A;
      }
    }

    footer {
      p {
        font-weight: 700;
        font-size: 0.8rem;
      }
      div {
        display: flex;
        align-items: center;
      }

      button {
        color: #3D3D3D;
      }
      input {
        border: none;
        background: none;
        width: 2.5rem;
        text-align: center;
      }
    }
  }

  aside {
    position: fixed;
    background: white;
    border-top: 0.5px solid #C3C3C3;
    bottom: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    table,
    button {
      width: 65vw;
      font-size: 0.75rem;
    }

    button {
      background: #FFD436;
      border: none;
      border-radius: 3px;
      padding: 2.5px 0;
      margin-top: 10px;
    }

    table tr th {
      text-align: left;
      font-weight: 400;
    }

    table tr td {
      text-align: right;
    }

  }
}

#cart-standard-view {
  display: none;

  div {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10vh;
  }

  main {
    table {
      box-shadow: 0 0 10px rgba(225, 225, 225, 1);
      width: 70vw;
      input {
        width: 10px;
      }
    }

    img {
      width: 100px;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-between;

    section {
      box-shadow: 0 0 10px rgba(225, 225, 225, 1);
    } 
  }


}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  #cart-mobile-view {
    display: none;
  }

  #cart-standard-view {
    display: block;
  }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  padding-top: 3.5em;

  #cart-mobile-view {
    display: none;
  }

  #cart-standard-view {
    display: block;
  }
}

// Monitor View
@media screen and (min-width: 1280px) {
  padding-top: 4.69em;

  #cart-mobile-view {
    display: none;
  }

  #cart-standard-view {
    display: block;
  }
  
}
`