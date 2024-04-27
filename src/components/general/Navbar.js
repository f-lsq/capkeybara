import React, { useState } from 'react';
import { Search, Person, Cart3, List, XCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../styles/Navbar.styled';

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <StyledNavbar>
        <div id="navLeft">
          <List/>
          <XCircle/>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/build">BUILD <span>A KEYBOARD</span></Link></li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
        </div>
        <div id="navCenter">
          <Link to="/"><h1>capkeybara</h1></Link>
        </div>
        <div id="navRight">
          <ul>
            <li><Search/></li>
            <li><Link to="/login"><Person/></Link></li>
            <li><Cart3/></li>
          </ul>
        </div>
      </StyledNavbar>
    </>
  )
}