import styled from "styled-components";

export const StyledBuyerCart = styled.div`
// Mobile View
padding-top: 2.94em;
margin-bottom: 1vh;

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
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
}

#cart-no-item-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 2.94em - 1.5rem - 0.8vh - 0.75rem - 3vh - 2*1vh);
  width: 100vw;
  
  img {
    width: 70vw;
  }

  h1 {
    font-size: 1.5rem;
    padding-bottom: 0.8vh;
  }

  p {
    font-size: 0.75rem;
    color: #474747;
    margin-bottom: 3vh;
  }

  button {
    background: #FFD436;
    padding: 1vh 3vw;
    border-radius: 5px;
    transition: 0.2s;
    font-size: 0.9rem;
  }

  button:hover {
    background: #FFDA53;
  }

  button:active {
    background: #F1C72F;
  }
}

#cart-mobile-view {
  min-height: calc(100vh - 2vh - 4*0.75rem - 2*2.5px - 2*10px);
  
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
      width: calc(100vw - 25vw - 2*10px - 2*2.8rem);
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
    position: sticky;
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
      border-radius: 3px;
      padding: 2.5px 0;
      margin-top: 10px;
      transition: 0.3s;
    }

    button:hover {
      background: #FFDA53;
    }

    button:active {
      background: #F1C72F;
    }

    table tr th {
      text-align: left;
      font-weight: 400;
    }

    table tr td {
      text-align: right;
    }

    table tr span {
      font-weight: 700;
    }

  }
}

#cart-standard-view {
  display: none;

  h1 {
    font-size: 1.5rem;
    padding: 3vh 5vw;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  main {
    padding: 3vw;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(225, 225, 225, 1);
    width: calc(65vw);

    table {
      font-size: 0.85rem;
      border-collapse: collapse;

      thead tr th {
        border-bottom: 1px solid #C3C3C3;
        width: calc((65vw - 2*3vw) / 9);
        padding: 5px;
        font-weight: 400;
      }

      thead tr th:first-of-type {
        width: calc(((65vw - 2*3vw) / 9) * 3);
      }

      tbody {

        td {
          padding: 5px;
        }

        .item-col {
          display: flex;
          align-items: center;

          img {
            width: 3vw;
            margin-right: 1vw;
          }

          p {
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          }
        }

        .price-col,
        .subtotal-col {
          width: calc(((65vw - 2*3vw) / 9) * 2);
          text-align: center;
        }

        .quantity-col {
          margin: auto;

          div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          

          button {
            color: #3D3D3D;
          }

          input {
            width: 2rem;
            border: none;
            text-align: center;
          }
        }

        .remove-col {
          width: 3rem;

          button {
            color: #CC935E;
            margin: auto;
          }

          div {
            button:first-of-type {
              color: #5E8C6C;
            }
      
            button:last-of-type {
              color: #FF1A1A;
            }
          }
        }
      }

      tfoot {
        tr td {
          border-top: 1px solid #C3C3C3; 
          padding: 5px;
        }
        tr td p {
          text-align: right;
        }

        tr td p span {
          font-weight: 700;
        }
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    

    section {
      padding: 3vw;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(225, 225, 225, 1);
      width: calc(30vw);
      display: flex;
      flex-direction: column;
      align-items: center;

      table {
        margin-bottom: 2vh;;
        width: 100%;
        border-collapse: collapse;
        font-size: 0.85rem;
      }

      table tbody tr {
        height: 4vh;
      }

      table tbody tr th{
        padding: 10px 0;
        text-align: left;
        font-weight: 400;
      }

      table tbody tr td{
        padding: 10px 0;
        text-align: right;
        font-weight: 700;
      }

      table tbody tr:last-of-type th, 
      table tbody tr:last-of-type td {
        border-top: 1px solid #C3C3C3; 
      }

      button {
        background: #FFD436;
        border-radius: 3px;
        padding: 1vh 3vw;
        margin-top: 10px;
        transition: 0.3s;
      }
  
      button:hover {
        background: #FFDA53;
      }
  
      button:active {
        background: #F1C72F;
      }
    } 

    img {
      width: 20vw;
    }
  }


}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  #cart-no-item-view {
    img {
      width: 60vw;
    }
  }

  #cart-mobile-view {
    display: block;
    min-height: calc(100vh - 2vh - 4*1rem - 2*2.5px - 10px - 2*20px);

    .cart-item { 
      height: 10vh;

      button {
        font-size: 1rem;
      }

      .cart-body {
        padding: 10px 30px;
      }

      header {
        h2 {
          width: calc(100vw - 25vw - 2* 30px - 2* 3.5rem);
          font-size: 0.9rem;
        }
      }
    
      footer {
        p {
          font-size: 1rem;
        }

        input {
          font-size: 1rem;
        }
        
      }
    }

    aside {
      padding: 20px;
      table tr th,
      table tr td,
      button {
        font-size: 1rem;
      }

      
    } 
  }

  #cart-standard-view {
    display: none;
  }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  padding-top: 3.5em;

  #cart-no-item-view {
    img {
      width: 40vw;
    }
  }

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

  #cart-no-item-view {
    img {
      width: 30vw;
    }
  }

  #cart-mobile-view {
    display: none;
  }

  #cart-standard-view {
    display: block;
  }
  
}
`