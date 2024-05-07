import React, { useContext, useEffect, useState } from 'react';
import { Person, Cart3, List, XCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../styles/general/Navbar.styled';
import { CartContext } from '../../context/CartContext';

export default function Navbar() {
  const cartContext = useContext(CartContext);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem("loginStatus") && localStorage.getItem("role") === 'buyer') {
          const response = await cartContext.getCartTotalQuantity(localStorage.getItem("id"))
          setCartTotalQuantity(response)
        }
      } catch (e) {
        console.log(e);
      }

    }
    fetchData();
  },[]) 

  const handleRefreshCart = async () => {
    const buyerId = localStorage.getItem("id")
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
            <li><Link to="/login"><Person/></Link></li>
            <li><Link to="/cart" onClick={handleRefreshCart}><Cart3/><span>{cartTotalQuantity}</span></Link></li>
          </ul>
        </div>
      </StyledNavbar>
    </>
  )
}