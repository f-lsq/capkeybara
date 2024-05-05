import React, { useContext, useEffect, useState } from 'react';
import { BoxArrowLeft, BoxSeam, ClipboardCheck, Gear, Grid1x2, Truck } from 'react-bootstrap-icons';
import { StyledSellerSidebar } from '../styles/SellerSidebar.styled';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { SellerContext } from '../../context/SellerContext';

const SellerSidebar = () => {
  const authContext = useContext(AuthContext);
  const sellerContext = useContext(SellerContext);

  const [seller, setSeller] = useState({});

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await sellerContext.getSellerById(localStorage.getItem("id"))
        setSeller(response.data.existingSeller)
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  },[])

  const handleLogOut = () => {
    authContext.logout();
  }

  return (
    <>
      <StyledSellerSidebar>
        <Link to="/seller/profile">
          <figure>
            <img src={seller.image_url} alt={seller.name}/>
            <figcaption>
              <p>{seller.name}</p>
              <p>@{seller.username}</p>
            </figcaption>
          </figure>
        </Link>
        <nav>
          <ul>
            {/* <li><Link to="/seller/dashboard"><Grid1x2/>Dashboard</Link></li> */}
            <li><Link to="/seller/product"><BoxSeam/>Products</Link></li>
            {/* <li><ClipboardCheck/>Orders</li>
            <li><Truck/>Shipping</li> */}
          </ul>
          <ul>
            {/* <li><Gear/>Settings</li> */}
            <li><Link to="/seller/login" onClick={()=>{handleLogOut()}}><BoxArrowLeft/>Logout</Link></li>
          </ul>
        </nav>
        
      </StyledSellerSidebar>
    </>
    
  );
};

export default SellerSidebar;