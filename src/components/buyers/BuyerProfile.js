import React, { useContext, useEffect, useState } from 'react';
import { StyledBuyerProfile } from '../styles/buyers/BuyerProfile.styled';
import { BuyerContext } from '../../context/BuyerContext';

const BuyerProfile = () => {

  const buyerContext = useContext(BuyerContext);
  const [buyerProfile, setBuyerProfile] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
          const buyerId = await buyerContext.getBuyerId();
          const response = await buyerContext.getBuyerById(buyerId);
          setBuyerProfile(response.data.existingBuyer);
        
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  },[])

  return (
    <StyledBuyerProfile>
      <ul>
        <li>ID: {buyerProfile.id}</li>
        <li>First Name: {buyerProfile.first_name}</li>
        <li>Email: {buyerProfile.email}</li>
        <li>Username: {buyerProfile.username}</li>
      </ul>
      
    </StyledBuyerProfile>
  );
};

export default BuyerProfile;