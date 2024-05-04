import React, { useContext } from 'react';
import { BoxArrowLeft, BoxSeam, ClipboardCheck, Gear, Grid1x2, Truck } from 'react-bootstrap-icons';
import { StyledSellerSidebar } from '../styles/SellerSidebar.styled';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const SellerSidebar = () => {
  const authContext = useContext(AuthContext);

  const onLogOut = () => {
    authContext.logout();
  }

  return (
    <>
      <StyledSellerSidebar>
        <figure>
          <Link to="/seller/profile">
            <img src="https://i.pinimg.com/736x/3d/04/d3/3d04d3e8850855914b914b07a56a1603.jpg" alt="Profile to be uploaded by sellers"/>
            <figcaption>
              <p>Peter Pan</p>
              <p>Vendor</p>
            </figcaption>
          </Link>
        </figure>
        <nav>
          <ul>
            <li><Link to="/seller/dashboard"><Grid1x2/>Dashboard</Link></li>
            <li><Link to="/seller/product"><BoxSeam/>Products</Link></li>
            {/* <li><ClipboardCheck/>Orders</li>
            <li><Truck/>Shipping</li> */}
          </ul>
          <ul>
            {/* <li><Gear/>Settings</li> */}
            <li><Link to="/seller/login" onClick={()=>{onLogOut()}}><BoxArrowLeft/>Logout</Link></li>
          </ul>
        </nav>
        
      </StyledSellerSidebar>
    </>
    
  );
};

export default SellerSidebar;