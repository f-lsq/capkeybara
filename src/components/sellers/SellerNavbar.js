import React, { useContext, useState } from 'react';
import { Person, List, XCircle, Bell } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { StyledSellerNavbar } from '../styles/sellers/SellerNavbar.styled';
import { AuthContext } from '../../context/AuthContext';

export default function SellerNavbar() {
  const authContext = useContext(AuthContext);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);

  return (
    <>
      <StyledSellerNavbar>
        <div id="navLeft">
          {!displayMenu && <List onClick={() => setDisplayMenu(true)} />}
          {displayMenu && <XCircle onClick={() => setDisplayMenu(false)} />}
          {displayMenu &&
            (<ul id="navlist-mobile-view">
              <li onClick={() => setDisplayMenu(false)}><Link to="/seller/product">PRODUCTS</Link></li>
              <li onClick={() => setDisplayMenu(false)}><Link to="/seller/order">ORDERS</Link></li>
            </ul>)}
        </div>
        <div id="navCenter">
          <Link to="/seller/dashboard"><h1>capkeybara</h1></Link>
        </div>
        <div id="navRight">
          <ul>
            {authContext.isAuthenticatedSeller()
              ? <>
                <li><Link to="/seller/profile"><Person /></Link></li>
                <li onClick={() => setDisplayNotification(!displayNotification)}>
                  <Bell />
                  {displayNotification && <span>No new notification!</span>}
                </li>
              </>
              : <li><Link to="/seller/login"><Person /></Link></li>
            }

          </ul>
        </div>
      </StyledSellerNavbar>
    </>
  )
}