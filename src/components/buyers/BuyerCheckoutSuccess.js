import React from 'react';
import checkoutSuccessImg from "../../assets/images/checkout-success.webp"
import checkoutSuccessGif from "../../assets/images/checkout-success.gif"
import { useNavigate } from 'react-router-dom';
import { StyledBuyerCheckoutSuccess } from '../styles/buyers/BuyerCheckout.styled';

const BuyerCheckoutSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <StyledBuyerCheckoutSuccess>
      <img src={checkoutSuccessImg}/>
      <img src={checkoutSuccessGif}/>
      <h1>Your payment was successful</h1>
      <p>We will be shipping out your items shortly.</p>
      <div>
        <button onClick={()=>navigate("/shop")}>Continue Shopping</button>
        <button onClick={()=>navigate("/profile")}>Check Your Orders</button>
      </div>
    </StyledBuyerCheckoutSuccess>
  );
};

export default BuyerCheckoutSuccess;