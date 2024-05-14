import styled from "styled-components";

export const StyledSellerTables = styled.main`
 // Mobile View
 width: 100%;
 margin: 3vh 3vw;

 .seller-standard-table-view {
  background: #FFF7ED;
  padding: 3vh 3vw;
  border-radius: 20px;
 }

  .seller-standard-table-view h1 {
    font-size: 1.2rem;
    margin-right: 2vw;
  }

  .seller-standard-table-view div {
    display: flex; 
    align-items: center;
    margin-bottom: 2vh;
  }

  .seller-standard-table-view div button {
      border: none;
      padding: 1vh 2vw; 
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;
      background: #66463D;
      color: white;
      display: flex; 
      align-items: center;
      transition: 0.2s;
  }

  .seller-standard-table-view div button:hover {
    background: #7A564C;
  }

  .seller-standard-table-view div button:active {
    background: #5B3B33;
  }
  
  .seller-standard-table-view div button svg {
    margin-right: 1vh;
  }

  .seller-standard-table-view table {
    font-size: 0.9rem;
  }

  .seller-standard-table-view table th,
  .seller-standard-table-view table td{
    padding: 1vh 1vw;
  }

  .seller-standard-table-view table thead tr th {
    border-bottom: 1px solid #C3C3C3;
    font-weight: 400;
  }
 
 .seller-product-img {
  width: 5vw;
  aspect-ratio: 1/1;
  object-fit: cover;
  margin-right: 2vw;
 }

 .seller-product-name-col {
  display: flex;
  align-items: center;
 }

 .seller-product-name-col p {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
 }

 .seller-right-align-col {
  text-align: right;
 }

 .seller-actions-col {
  width: 8rem;
 }

 .seller-actions-col button {
  margin-left: 10px;
  border: none;
  cursor: pointer;
  padding: 0.5vh 0.5vw;
  border-radius: 5px;
  transition: 0.2s;
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

export const StyledSellerOrders = styled(StyledSellerTables)`
.seller-order-status-col p,
.seller-order-status-col select {
  width: 150px;
}

.seller-order-status-col select {
  border: 1px solid #F1F1F1;
  background: #F4C68B;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}


.seller-order-status-col select:focus {
  border: 2px solid #e1b55f;
}

.seller-order-status-col p.Payment{
  color: #E70000;
}

.seller-order-status-col p.Ready{
  color: #D47F00;
}

.seller-order-status-col p.Out{
  color: #CAB600;
}

.seller-order-status-col p.Delivered{
  color: #04AF00;
}
.seller-actions-col button {
  background: #8CCADD;
}

.seller-actions-col button:hover {
  background: #98D5E8;
}

.seller-actions-col button:active {
  background: #7FC2D7;
}

.seller-actions-col div {
  margin: 0;

  button {
    padding: 0.5vh 0.5vw;
    color: black;
  
    svg {
      margin: 0;
    }
  }
}

.seller-actions-col div button:first-of-type {
  background: #97DD8C;

}

.seller-actions-col div button:last-of-type {
  background: #DD8C8C;
}

.seller-actions-col div button:first-of-type:hover {
  background: #ABEBA1;
}

.seller-actions-col div button:last-of-type:hover {
  background: #F0ABAB;
}

.seller-actions-col div button:first-of-type:active {
  background: #8BD27F;
}

.seller-actions-col div button:last-of-type:active {
  background: #D07D7D;
}



`

export const StyledSellerProducts = styled(StyledSellerTables)`
  .seller-actions-col button:first-of-type {
    background: #97DD8C;
  }
  
  .seller-actions-col button:last-of-type {
    background: #DD8C8C;
  }

  .seller-actions-col button:first-of-type:hover {
    background: #ABEBA1;
  }
  
  .seller-actions-col button:last-of-type:hover {
    background: #F0ABAB;
  }

  .seller-actions-col button:first-of-type:active {
    background: #8BD27F;
  }
  
  .seller-actions-col button:last-of-type:active {
    background: #D07D7D;
  }


`


