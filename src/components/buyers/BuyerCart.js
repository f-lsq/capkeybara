import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { StyledBuyerCart } from '../styles/buyers/BuyerCart.styled';
import { CaretLeftFill, CheckLg, DashLg, PlusLg, TrashFill, XLg } from 'react-bootstrap-icons';
import buyerCartBackground from "../../assets/images/main/buyer-cart.webp"
import buyerCartEmptyBackground from "../../assets/images/main/buyer-cart-empty.webp"
import { notifySuccess, notifyError } from '../../utils';
import { BuyerContext } from '../../context/BuyerContext';
import { CartContext } from '../../context/CartContext';
import { CheckoutContext } from '../../context/CheckoutContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const BuyerCart = () => {
  const navigate = useNavigate();
  const buyerContext = useContext(BuyerContext);
  const cartContext = useContext(CartContext);
  const checkoutContext = useContext(CheckoutContext);
  const [buyerId, setBuyerId] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [isDeleting, setIsDeleting] = useState([false, ""]);
  const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyerResponse = await buyerContext.getBuyerProfile();
        const buyerId = buyerResponse.data.payload.id;
        setBuyerId(buyerId);
        const itemResponse = await cartContext.getCartItem(buyerId);
        const quantityResponse = await cartContext.getCartTotalQuantity(buyerId)
        const priceResponse = await cartContext.getCartTotalPrice(buyerId)
        setCartItems(itemResponse.data.cartItems);
        setCartTotalQuantity(quantityResponse);
        setCartTotalPrice(priceResponse);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [updateFlag, buyerContext, cartContext])

  const handleAddQuantity = async (productId) => {
    const productData = {
      product_id: productId
    }
    await cartContext.addToCart(buyerId, productData);
    setUpdateFlag(!updateFlag);
  }

  const handleRemoveQuantity = async (productId) => {
    const productData = {
      product_id: productId
    }
    await cartContext.removeFromCart(buyerId, productData)
    setUpdateFlag(!updateFlag);
  }

  const handleUpdateQuantity = async (productId, inputValue) => {
    try {
      // Replace all non-numeric valeus with empty string
      let newQuantity = parseInt(inputValue.replace(/\D/g, ''))
      const productData = {
        product_id: productId,
        new_quantity: newQuantity
      }
      await cartContext.updateCartItemQuantity(buyerId, productData);
      setUpdateFlag(!updateFlag);
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (productId, productName) => {
    const productData = {
      product_id: productId
    }
    const response = await cartContext.removeCartItem(buyerId, productData)
    if (response.status === 200) {
      notifySuccess(`${productName} has been removed from the cart.`, 'removeItemFromCartSuccess')
    } else {
      notifyError(`${productName} was not removed from the cart.`, 'removeItemFromCartError')
    }
    setUpdateFlag(!updateFlag);
  }

  const handleCheckout = async () => {
    const responseCart = await cartContext.getCartItem(buyerId)
    let cartItems = responseCart.data.cartItems;

    // Create an array of promises for items to be removed
    const removeCartItemPromise = cartItems.filter(cartItem => cartItem.quantity === null || cartItem.quantity <= 0)
                                           .map(async (cartItem) => {
                                            const productData = {
                                              product_id: cartItem.product_id
                                            }
                                            return await cartContext.removeCartItem(buyerId, productData); 
                                           })
    

    // Ensures that all removeCartItemPromise are executed before proceeding
    await Promise.all(removeCartItemPromise); 
    setUpdateFlag(!updateFlag);
    
    // Get Stripe Session ID and redirect to Stripe Checkout page
    const responseCheckout = await checkoutContext.getCheckoutSession(buyerId);
    if(responseCheckout) {
      notifySuccess("Proceeding to checkout page...");
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: responseCheckout.data.sessionId
      });
    } else {
      notifyError("Checkout unsuccessful! Cart is empty");
    }
  }

  return (
    <StyledBuyerCart>
      {cartItems.length !== 0 ?
        <>
          <div id="cart-mobile-view">
            <h1><span><Link to="/shop"><CaretLeftFill /></Link></span>My Cart</h1>
            <main>
              {cartItems.map(cartItem => (
                <article key={cartItem.product.id} className="cart-item">
                  <figure>
                    <img src={cartItem.product.image_url} alt={cartItem.product.name} />
                  </figure>
                  <div className='cart-body'>
                    <header>
                      <h2>{cartItem.product.name}</h2>
                      {
                        isDeleting[0] && isDeleting[1] === cartItem.product.id ?
                          <div>
                            <button onClick={() => handleDelete(cartItem.product.id, cartItem.product.name)}><CheckLg /></button>
                            <button onClick={() => setIsDeleting([false, ""])}><XLg /></button>
                          </div> :
                          <button onClick={() => setIsDeleting([true, cartItem.product.id])}><TrashFill /></button>
                      }
                    </header>
                    <footer>
                      <p>$ {(cartItem.product.price * cartItem.quantity).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}</p>
                      <div>
                        <button onClick={() => handleRemoveQuantity(cartItem.product.id)}><DashLg /></button>
                        <input type="text" value={cartItem.quantity || 0} onChange={(e) => handleUpdateQuantity(cartItem.product.id, e.target.value)} />
                        <button onClick={() => handleAddQuantity(cartItem.product.id)}><PlusLg /></button>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </main>
            <aside>
              <table>
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>$ {cartTotalPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}</td>
                  </tr>
                  <tr>
                    <th>Shipping Fee</th>
                    <td>$ {(cartTotalQuantity * 2).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}</td>
                  </tr>
                  <tr className="sub-total">
                    <th><span>Order Total</span></th>
                    <td><span>$ {(cartTotalPrice + cartTotalQuantity * 2).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}</span></td>
                  </tr>
                </tbody>
              </table>
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </aside>
          </div>
          <div id="cart-standard-view">
            <h1><span><Link to="/shop"><CaretLeftFill /></Link></span>My Cart</h1>
            <div>
              <main>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(cartItem => (
                      <tr key={cartItem.product.id}>
                        <td className='item-col'>
                          <img src={cartItem.product.image_url} alt={cartItem.product.name} />
                          <p>{cartItem.product.name}</p>
                        </td>
                        <td className='price-col'>
                          <p>$ {cartItem.product.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</p>
                        </td>
                        <td className='quantity-col'>
                          <div>
                            <button onClick={() => handleRemoveQuantity(cartItem.product.id)}><DashLg /></button>
                            <input type="text" value={cartItem.quantity || 0} onChange={(e) => handleUpdateQuantity(cartItem.product.id, e.target.value)} />
                            <button onClick={() => handleAddQuantity(cartItem.product.id)}><PlusLg /></button>
                          </div>
                        </td>
                        <td className='subtotal-col'>
                          <p>$ {(cartItem.product.price * cartItem.quantity).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</p>
                        </td>
                        <td className='remove-col'>
                          {
                            isDeleting[0] && isDeleting[1] === cartItem.product.id ?
                              <div>
                                <button onClick={() => handleDelete(cartItem.product.id, cartItem.product.name)}><CheckLg /></button>
                                <button onClick={() => setIsDeleting([false, ""])}><XLg /></button>
                              </div> :
                              <button onClick={() => setIsDeleting([true, cartItem.product.id])}><TrashFill /></button>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="100%">
                        <p>Subtotal ({cartTotalQuantity} items): <span>$ {cartTotalPrice.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</span></p>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </main>
              <aside>
                <section>
                  <table>
                    <tbody>
                      <tr>
                        <th>Subtotal</th>
                        <td>$ {cartTotalPrice.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                      <tr>
                        <th>Shipping Fee</th>
                        <td>$ {(cartTotalQuantity * 2).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                      <tr>
                        <th>Order Total</th>
                        <td>$ {(cartTotalPrice + cartTotalQuantity * 2).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button onClick={handleCheckout}>Proceed to Checkout</button>
                </section>
                <img src={buyerCartBackground} alt="Zen capybara with leaf on head" />
              </aside>
            </div>
          </div>
        </> :
        <>
          <div id='cart-no-item-view'>
            <img src={buyerCartEmptyBackground} alt="Sad capybara beside a window showing a shopping cart with no item" />
            <h1>Your Cart is Empty!</h1>
            <p>Add something to make me cappy.</p>
            <button onClick={() => navigate("/shop")}>Start Shopping</button>
          </div>
        </>
      }
    </StyledBuyerCart>
  );
};

export default BuyerCart;