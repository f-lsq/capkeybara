import React from 'react';
import { Search, Person, Cart3 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <div id="navLeft">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/build">BUILD A KEYBOARD</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div id="navCenter">
          <h1>Capkeybara</h1>
        </div>
        <div id="navRight">
          <Search/>
          <Link to="/login"><Person/></Link>
          <Cart3/>
        </div>
      </div>
    </>
  )
}

export default Navbar;