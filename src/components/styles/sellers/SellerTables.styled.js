import styled from "styled-components";

export const StyledSellerTables = styled.main`
 // Mobile View
 width: 100%;
 margin: 3vh 4vw;

 .seller-mobile-table-view {
  display: block;
 }

 .seller-mobile-table-view img{
  width: 100px;
 }

 .seller-mobile-table-view header{
  display: flex;
  align-items: center;
  justify-content: space-between;
 }

 .seller-mobile-table-view h1{
  font-size: 1rem;
  margin-right: 2vw;
 }

 .seller-mobile-table-view h2{
  font-weight: normal;
 }

 .seller-mobile-table-view h2,
 .seller-product-name-col p {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
 }

 .seller-mobile-table-view article,
 .seller-standard-table-view {
  background: #FFF7ED;
  padding: 3vh 3vw;
 }

 .seller-mobile-table-view article {
  font-size: 0.8rem;
  border-radius: 10px;
  margin: max(15px, 2vh) 0;
  display: flex;
 }

 .seller-mobile-table-view h2,
 .seller-product-article section:first-of-type dl,
 .seller-product-article section:last-of-type,
 .seller-product-article section:last-of-type button {
  font-size: 0.8rem;
 }

 .seller-no-stock {
  color: #C81010;
  }

 .seller-edit-delete-btn {
  position: absolute;
  top: 1.5rem;
  right: -1rem;
 }

 .seller-action-btn {
  background: none;
 }

 .seller-edit-btn {
  background: #97DD8C;
 }

 .seller-delete-btn {
  background: #DD8C8C;
  margin-left: 0.5rem;
 }

 .seller-product-article section:last-of-type button,
 .seller-order-article-top section:nth-of-type(2) button {
   border: none;
   border-radius: 2px;
   padding: 2px;
   height: auto;
   display: flex;
   justify-content: center;
 }

 .seller-standard-table-view {
  border-radius: 20px;
  display: none;
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

  .seller-mobile-table-view header div button,
  .seller-standard-table-view div button {
      border: none;
      padding: 1vh 2vw; 
      border-radius: 3px;
      cursor: pointer;
      font-size: 0.65rem;
      background: #66463D;
      color: white;
      display: flex; 
      align-items: center;
      transition: 0.2s;
  }

  .seller-mobile-table-view header div button svg,
  .seller-standard-table-view div button svg {
    margin-right: 5px;
  }

  .seller-mobile-table-view header div button:hover,
  .seller-standard-table-view div button:hover {
    background: #7A564C;
  }

  .seller-mobile-table-view header div button:active,
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
  .seller-mobile-table-view article {
    font-size: 1rem;
  }
  
  .seller-mobile-table-view h1{
    font-size: 1.1rem;
    margin-right: 2vw;
   }
  
  .seller-mobile-table-view h2,
  .seller-product-article section:first-of-type dl,
  .seller-product-article section:last-of-type,
  .seller-product-article section:last-of-type button {
   font-size: 1rem;
  }

  .seller-product-article section dt {
    font-size: 0.8rem;
   }
  
   .seller-product-article section:last-of-type dd {
    font-size: 1.5rem;
    font-weight: bold;
   }
  
  .seller-edit-delete-btn {
    top: 0;
    right: 0;
   }

   .seller-delete-btn {
    margin-right: 0.5rem;
   }

   .seller-mobile-table-view header div button,
   .seller-standard-table-view div button {
       font-size: 0.8rem;
   }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  margin: 3vh 2vw;
  .seller-mobile-table-view {
    display: none;
   }
  
   .seller-standard-table-view {
    display: block;
   }

   .seller-mobile-table-view header div button,
   .seller-standard-table-view div button {
       font-size: 0.9rem;
   }
}

// Monitor View
@media screen and (min-width: 1280px) {
  margin: 3vh 2vw;
  .seller-mobile-table-view {
    display: none;
   }
  
   .seller-standard-table-view {
    display: block;
   }

   .seller-mobile-table-view header div button,
   .seller-standard-table-view div button {
       font-size: 0.9rem;
   }
}

`

export const StyledSellerOrders = styled(StyledSellerTables)`
.seller-order-article {
  flex-direction: column;
 }

 .seller-order-article-top {
  display: flex;
  flex-direction: column;
 }

 .seller-order-article-top section {
  display: flex;
  justify-content: space-between;
 }

 .seller-order-id {
  font-weight: bold;
 }

 .seller-order-article-top section:first-of-type {
  order: 1;
  margin-top: 0.8rem;
 }

 .seller-order-article-top section:nth-of-type(2) div:last-of-type {
  display: flex;
  height: calc(0.8rem + 2*2px);
 }

 .seller-order-article-top section:nth-of-type(2) div:last-of-type button {
  font-size: 0.8rem;
 }
 
 .seller-delete-btn {
  margin-right: 0;
 }

 .seller-action-btn {
  background: #8CCADD;
 }

 .seller-order-article-section {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
 }

 .seller-order-article-section img {
  width: 15vw;
 }

 .seller-order-article-section div {
  width: calc(100vw - 2*4vw - 2*3vw - 2*15vw - 2*5vw);
  margin: auto 0;
 }

 .seller-order-article-section div p:last-of-type,
 .seller-order-article-section dl dt {
  font-size: 0.65rem;
 }

 .seller-order-article-section div p:first-of-type {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
 }

 .seller-order-article-section div p:last-of-type {
  color: #595959;
 }

 .seller-order-article-section dl {
  width: 15vw;
  text-align: right;
  display: flex;
  flex-direction: column;
  margin: auto 0;
 }

 .seller-order-article-section dl dt {
  order: 2;
  color: #66463D;
 }

 .seller-order-article-section dl dd {
  font-size: 1.2rem;
  font-weight: bold;
 }
 


.seller-order-status-col p,
.seller-order-status-col select {
  width: 150px;
}

select {
  border: 1px solid #F1F1F1;
  background: #F4C68B;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.seller-order-status-col select:focus {
  border: 2px solid #e1b55f;
}

p.Payment{
  color: #E70000;
}

p.Ready{
  color: #D47F00;
}

p.Out{
  color: #CAB600;
}

p.Delivered{
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

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  .seller-order-article-top section:nth-of-type(2) div:last-of-type {
    height: calc(1rem + 2*2px);
   }

   .seller-order-article-top section:nth-of-type(2) div:last-of-type button {
    font-size: 1rem;
   }

   .seller-order-article-section dl dd {
    font-size: 1.5rem;
   }

   .seller-order-article-section div p:last-of-type,
   .seller-order-article-section dl dt {
    font-size: 0.8rem;
   }
}


`

export const StyledSellerProducts = styled(StyledSellerTables)`
  .seller-product-article {
    justify-content: space-between;
  }

  .seller-product-article img{
    width: 15vw;
    object-fit: contain;
   }

  .seller-product-article section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .seller-product-article section:first-of-type{
    width: calc(100vw - 2*4vw - 2*3vw - 2*15vw - 2*5vw);
  }

  .seller-product-article section:first-of-type dl{
    display: flex;
    justify-content: space-between;
  }
  
  .seller-product-article section:first-of-type dl div:first-of-type dt{
    color: #5E8C6C;
  }
  
  .seller-product-article section:first-of-type dl div:last-of-type dt{
    color: #CC884A;
  }
  
  .seller-product-article section:last-of-type dt{
    color: #66463D;
  }
  
  .seller-product-article section dt,
  .seller-product-article section dd{
    text-align: right;
  }
  
  .seller-product-article section dt {
    font-size: 0.65rem;
  }
  
  .seller-product-article section:last-of-type{
    width: 15vw;
  }
  
  .seller-product-article section:last-of-type dl {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
  }
  
  .seller-product-article section:last-of-type dt {
    order: 2;
  }
  
  .seller-product-article section:last-of-type dd {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .seller-product-article section:last-of-type div {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

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


