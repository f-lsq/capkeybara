import React, { useState } from 'react';
import { Search, Person, List, XCircle, Bell } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { StyledSellerNavbar } from '../styles/sellers/SellerNavbar.styled';

export default function SellerNavbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <StyledSellerNavbar>
        <div id="navLeft">
          <List/>
          <XCircle/>
          <ul>
            <li><Link to="/seller/dashboard">DASHBOARD</Link></li>
            <li><Link to="/seller/product">PRODUCTS</Link></li>
            <li><Link to="/seller/order">ORDERS</Link></li>
          </ul>
        </div>
        <div id="navCenter">
          <Link to="/seller/dashboard"><h1>capkeybara</h1></Link>
        </div>
        <div id="navRight">
          <ul>
            <li><Link to="/seller/login"><Person/></Link></li>
            <li><Bell/></li>
          </ul>
        </div>
      </StyledSellerNavbar>
    </>
  )
}