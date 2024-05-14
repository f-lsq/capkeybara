import styled from "styled-components";

export const StyledBuyerProfile = styled.div`
// Mobile View
padding: calc(2vh + 2.94em) 5vw 5vh 5vw;

.profile-no-order-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
  min-height: 40vh;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(225, 225, 225, 1);
  padding: 2vh 5vw;
  text-align: center;
  
  img {
    width: 70vw;
  }

  h1 {
    font-family: Aldrich;
    font-size: 1.5rem;
    padding: 2vh 5vw 0.8vh 5vw;
  }

  p {
    font-size: 0.8rem;
    color: #474747;
    margin-bottom: 5vh;
  }

  button {
    border: none;
    padding: 1.5vh 5vw; 
    margin-bottom: 2vh;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    background: #FFD436;
  }
}

#profile-mobile-view {

  display: flex;
  flex-direction: column;

  aside, table {
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(225, 225, 225, 1);
    padding: 3vh 10vw;
    margin: 2vh 0 5vh 0;
    width: 100%;  
  }

  aside {
    display: flex;
    align-item: center;
    justify-content: center;

    img {
      object-fit: cover;
      width: 12vw;
      aspect-ratio: 1/1;
      margin-right: 5vw;
      border-radius: 50%;
    }

    figcaption {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p:first-of-type {
        font-weight: 700;
        font-size: 1rem;
      }
      
      p:last-of-type {
        font-size: 0.85rem;
        color: #333333;
      }
    }
  }

  main {
    h1 {
      font-size: 1rem;
    }
    table {
      font-size: 0.9rem;
      thead,
      tbody,
      tfoot {
        tr {
          td:last-of-type {
            text-align: right;
            width: 60%;
          }
        }
      }

      .profile-order-id {
        font-weight: 700;
      }

      .profile-order-address {
        padding: 1.5vh 0;
        p {
          text-align: left;
          
        }
      }

      .profile-order-status {
        color: #E11B00;
      }

      .profile-order-status-delivered {
        color: #0DA309;
      }

      .profile-order-product {
        width: 50vw;
        display: flex;

        img {
          width: 30%;
          object-fit: contain;
          margin: 1vh 3vw 1vh 0;
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          p {
            font-size: 0.8rem;
          }

          p:first-of-type {
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            margin-bottom: 0.5vh;
          }

          p:last-of-type {
            color: #595959;
          }
        }
      }

      .profile-order-bold {
        font-weight: 700;
      }

      tfoot {
        
        tr:first-of-type td {
          border-top: 1px solid #C3C3C3;
          padding-top: 2vh;
        }
      }
    }
  }
}

#profile-standard-view {
  display: none;
  margin-top: 3vh;

  aside figure, table {
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(225, 225, 225, 1);
  }

  aside {
    margin-right: 3.5vw;
    figure {
      display: flex;
      align-items: center;
      padding: 2vh 3vw;

      img {
        width: 7vw;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
      }
    }

    figcaption {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 2vw;

      p:first-of-type {
        font-weight: 700;
        font-size: 1rem;
        white-space: nowrap;
      }
      
      p:last-of-type {
        font-size: 0.85rem;
        color: #333333;
      }
    }
  }

  main {
    h1 {
      font-size: 1.1rem;
    }

    table {
      margin: 2vh 0 4vh 0;
      padding: 2vh 3vw;
      width: 100%;
      font-size: 0.9rem;
      
      thead tr td {
        vertical-align: text-top;  
        
        padding: 0 1vw;
      }

      thead tr:last-of-type td:last-of-type {
        padding-bottom: 4vh;
      }

      tbody tr td {
        border-top: 1px solid #C3C3C3;
        img {
          width: 6vw;
          aspect-ratio: 1 / 1;
          object-fit: contain;
          margin: 0 1vw 0 2vw;
        }
      }

      .profile-order-product {
        font-size: 0.8rem;

        p:last-of-type {
          color: #333333;
        }
      }

      .profile-order-status {
        color: #E11B00;
      }

      .profile-order-status-delivered {
        color: #0DA309;
      }

      tbody,
      tfoot {
        tr td:last-of-type {
          text-align: right;
        }
      }

      .profile-order-bold {
        font-weight: 700;
      }

      tfoot {
        tr td {
          white-space: nowrap;
        }
        tr:first-of-type td {
          border-top: 1px solid #C3C3C3;
          padding-top: 2vh;
        }
      }
    }
  }
}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  #profile-mobile-view {
    aside {
      figcaption {
        p:first-of-type {
          font-size: 1.3rem;
        }
        
        p:last-of-type {
          font-size: 1rem;
        }
      }
    }

    main {
      h1 {
        font-size: 1.2rem;
      }
      table {
        font-size: 1.1rem;

        .profile-order-product {
          div {
            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  padding: calc(2vh + 3.5em) 5vw 5vh 5vw;

  .profile-no-order-view {
    img {
      width: 90%;
    }
  }

  #profile-mobile-view {
    display: none;
  }
  
  #profile-standard-view {
    display: flex;
  }
}

// Monitor View
@media screen and (min-width: 1280px) {
  padding: calc(2vh + 4.69em) 5vw 5vh 5vw;

  .profile-no-order-view {
    img {
      width: 80%;
    }
  }

  #profile-mobile-view {
    display: none;
  }
  
  #profile-standard-view {
    display: flex;
  }
  
}
`