import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledSellerNavbar } from '../styles/general/Navbar.styled';
import { Person, List, XCircle, Bell, BellSlash } from 'react-bootstrap-icons';
import sellerNoNotification from '../../assets/images/main/seller-no-notification.webp';
import { AuthContext } from '../../context/AuthContext';

export default function SellerNavbar() {
  const authContext = useContext(AuthContext);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);

  return (
    <>
      <StyledSellerNavbar>
        <div id="navLeft">
          {!displayMenu && <List onClick={() => {setDisplayMenu(true); setDisplayNotification(false)}} />}
          {displayMenu && <XCircle onClick={() => setDisplayMenu(false)} />}
          {displayMenu &&
            (<ul id="navlist-mobile-view">
              {authContext.isAuthenticatedSeller() ?
              <>
                <li onClick={() => setDisplayMenu(false)}><Link to="/seller/product">PRODUCTS</Link></li>
                <li onClick={() => setDisplayMenu(false)}><Link to="/seller/order">ORDERS</Link></li>
              </> :
              <>
                <li onClick={() => setDisplayMenu(false)}><Link to="/seller/signup">SIGN UP</Link></li>
                <li onClick={() => setDisplayMenu(false)}><Link to="/seller/login">LOG IN</Link></li>
              </> 
              }
            </ul>)}
        </div>
        <div id="navCenter">
          <Link to="/seller/product"><h1>capkeybara</h1></Link>
        </div>
        <div id="navRight">
          <ul>
            {authContext.isAuthenticatedSeller()
              ? <>
                <li><Link to="/seller/profile"><Person /></Link></li>
                <li>
                  {displayNotification ? 
                  <>
                    <BellSlash onClick={() => setDisplayNotification(false)}/>
                    <span onClick={() => setDisplayNotification(false)}>
                      <img src={sellerNoNotification} alt="Notification bell sleeping"/>
                      <p>No new notification!</p>
                    </span>
                  </> :
                  <>
                    <Bell onClick={() => {setDisplayNotification(true); setDisplayMenu(false)}}/>
                  </>
                  }
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