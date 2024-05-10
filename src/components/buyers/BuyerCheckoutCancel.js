import React, { useContext } from 'react';
import checkoutCancelImg from "../../assets/images/checkout-cancel.webp"
import checkoutCancelGif from "../../assets/images/checkout-cancel.gif"
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutContext } from '../../context/CheckoutContext';
import { StyledBuyerCheckoutCancel } from '../styles/buyers/BuyerCheckout.styled';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const BuyerCheckoutSuccess = () => {
  const navigate = useNavigate();
  const checkoutContext = useContext(CheckoutContext);

  const handleCheckout = async () => {
    const buyerId = localStorage.getItem("id"); 
    const responseCheckout = await checkoutContext.getCheckoutSession(buyerId);
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      sessionId: responseCheckout.data.sessionId
    });
  }
  
  return (
    <StyledBuyerCheckoutCancel>
      <img src={checkoutCancelImg}/>
      <img src={checkoutCancelGif}/>
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