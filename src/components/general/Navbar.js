import React, { useContext, useEffect, useState } from 'react';
import { Person, Cart3, List, XCircle } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { StyledNavbar } from '../styles/general/Navbar.styled';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { BuyerContext } from '../../context/BuyerContext';
import { useRefreshAccessToken, notifySuccess } from '../../utils';

export default function Navbar() {
  useRefreshAccessToken();

  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const [cartTotalQuantity, setCartTotalQuantity] = useState(null);
  const [buyerProfile, setBuyerProfile] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (authContext.isAuthenticatedBuyer()) {
          const buyerResponse = await buyerContext.getBuyerProfile();
          const buyerId = buyerResponse.data.payload.id;
          const cartResponse = await cartContext.getCartTotalQuantity(buyerId)
          setCartTotalQuantity(cartResponse)
          setBuyerProfile(buyerResponse.data.payload);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  })

  const handleRefreshCart = async () => {
    try {
      if (authContext.isAuthenticatedBuyer()) {
        const buyerId = buyerProfile.id;
        const response = await cartContext.getCartItem(buyerId)
        const cartItems = response.data.cartItems
        cartItems.forEach(async (cartItem) => {
          if (!cartItem.quantity) {
            const productData = {
              product_id: cartItem.product_id
            }
            await cartContext.removeCartItem(buyerId, productData)
          }
        })
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleLogout = async () => {
    authContext.logout();
    buyerContext.logout();
    setCartTotalQuantity(null)
    setBuyerProfile(null);
    notifySuccess("Logout successful. See you again!", "logoutSuccess");
    navigate("/login");
  }

  return (
    <>
      <StyledNavbar>
        <div id="navLeft">
          {!displayMenu && <List onClick={() => setDisplayMenu(true)} />}
          {displayMenu && <XCircle  onClick={() => setDisplayMenu(false)}/>}
          {displayMenu &&
            (<ul id="navlist-mobile-view">
              <li onClick={() => setDisplayMenu(false)}><Link to="/">HOME</Link></li>
              <li onClick={() => setDisplayMenu(false)}><Link to="/shop">SHOP</Link></li>
              <li onClick={() => setDisplayMenu(false)}><Link to="/build">BUILD <span>A KEYBOARD</span></Link></li>
              <li onClick={() => setDisplayMenu(false)}><Link to="/about">ABOUT</Link></li>
            </ul>)}
          <ul id="navlist-standard-view">
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
            {authContext.isAuthenticatedBuyer()
              ? (buyerProfile && (
                <li>
                  <p><Link to="/profile">Hello, {buyerProfile.first_name}</Link></p>
                  <button onClick={handleLogout}>Log out</button>
                </li>))
              : <li><Link to="/login"><Person /></Link></li>}
            <li><Link to="/cart" onClick={handleRefreshCart}>
              {cartTotalQuantity !== null && <span><p>{cartTotalQuantity}</p></span>}
              <Cart3 className='cart-icon' />
            </Link></li>
          </ul>
        </div>
      </StyledNavbar>
    </>
  )
}