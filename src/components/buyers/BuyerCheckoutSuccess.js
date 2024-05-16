import React, { useContext, useEffect } from 'react';
import checkoutSuccessImg from "../../assets/images/main/checkout-success.webp"
import checkoutSuccessGif from "../../assets/images/main/checkout-success.gif"
import { useNavigate } from 'react-router-dom';
import { StyledBuyerCheckoutSuccess } from '../styles/buyers/BuyerCheckout.styled';
import { AuthContext } from '../../context/AuthContext';
import { BuyerContext } from '../../context/BuyerContext';
import { OrderContext } from '../../context/OrderContext';

const BuyerCheckoutSuccess = () => {
  const navigate = useNavigate();
  const buyerContext = useContext(BuyerContext);
  const orderContext = useContext(OrderContext);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const buyerId = await buyerContext.getBuyerId();
        await orderContext.createNewOrder(buyerId)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  })
  
  return (
    <StyledBuyerCheckoutSuccess>
      <img src={checkoutSuccessImg} alt="Capybara smiling while walking through a field of butterfly"/>
      <img src={checkoutSuccessGif} alt="Animated tick logo"/>
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