import React, { useContext, useEffect, useState } from 'react';
import checkoutCancelImg from "../../assets/images/main/checkout-cancel.webp"
import checkoutCancelGif from "../../assets/images/main/checkout-cancel.gif"
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutContext } from '../../context/CheckoutContext';
import { StyledBuyerCheckoutCancel } from '../styles/buyers/BuyerCheckout.styled';
import { BuyerContext } from '../../context/BuyerContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const BuyerCheckoutSuccess = () => {
  const navigate = useNavigate();
  const checkoutContext = useContext(CheckoutContext);
  const buyerContext = useContext(BuyerContext);
  const [buyerId, setBuyerId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const buyerResponse = await buyerContext.getBuyerProfile();
          setBuyerId(buyerResponse.data.payload.id);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [])

  const handleCheckout = async () => {
    const responseCheckout = await checkoutContext.getCheckoutSession(buyerId);
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      sessionId: responseCheckout.data.sessionId
    });
  }
  
  return (
    <StyledBuyerCheckoutCancel>
      <img src={checkoutCancelImg} alt="Capybara with a sad expression while swimming in a pool of oranges"/>
      <img src={checkoutCancelGif} alt="Animated cross logo"/>
      <h1>Your payment has failed</h1>
      <p>Please retry the payment after a moment.</p>
      <div>
        <button onClick={()=>navigate("/cart")}>Go Back</button>
        <button onClick={handleCheckout}>Retry Payment</button>
      </div>
    </StyledBuyerCheckoutCancel>
  );
};

export default BuyerCheckoutSuccess;