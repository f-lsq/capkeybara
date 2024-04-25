import React from 'react';
import { Search, Person, Cart3 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../styles/Navbar.styled';

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <div id="navLeft">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/build">BUILD A KEYBOARD</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
        </div>
        <div id="navCenter">
          <Link to="/"><h1>Capkeybara</h1></Link>
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