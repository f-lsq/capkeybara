import React, { useContext, useEffect, useState } from 'react';
import { StyledBuyerProfile } from '../styles/buyers/BuyerProfile.styled';
import { BuyerContext } from '../../context/BuyerContext';
import { AuthContext } from '../../context/AuthContext';
import { useRefreshAccessToken } from '../../utils';
import { useNavigate } from 'react-router-dom';

const BuyerProfile = () => {
  useRefreshAccessToken();

  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);
  const navigate = useNavigate();

  const [buyerProfile, setBuyerProfile] = useState({
    id: "",
    first_name: "",
    email: "",
    username: ""
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await buyerContext.getBuyerProfile();
          setBuyerProfile(response.data.payload);
        
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