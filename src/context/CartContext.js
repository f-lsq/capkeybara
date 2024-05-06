import React, {createContext} from 'react';
import CartServices from '../service-layer/CartServiceLayer';

export const CartContext = createContext();

export default function CartContextData({children}) {
 
  const serviceOperations = {
    getCartItem: async (buyerId) => {
      try {
        const response = await CartServices.getCartitem(buyerId);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    },
    getCartTotalQuantity: async (buyerId) => {
      try {
        const cartTotalQuantity = await CartServices.getCartTotalQuantity(buyerId);
        return cartTotalQuantity;
      } catch(e) {
        throw new Error(e);
      }
    },
    getCartTotalPrice: async (buyerId) => {
      try {
        const cartTotalPrice = await CartServices.getCartTotalPrice(buyerId);
        return cartTotalPrice;
      } catch(e) {
        throw new Error(e);
      }
    },
    addToCart: async (buyerId, productData) => {
      try {
        const response = await CartServices.addToCart(buyerId, productData);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    },
    removeFromCart: async (buyerId, productData) => {
      try {
        const response = await CartServices.removeFromCart(buyerId, productData);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    },
    updateCartItemQuantity: async (buyerId, productData) => {
      try {
        const response = await CartServices.updateCartItemQuantity(buyerId, productData);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    },
    removeCartItem: async (buyerId, productData) => {
      try {
        const response = await CartServices.removeCartItem(buyerId, productData);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    }
  }

  return (
    <CartContext.Provider value={serviceOperations}>
      {children}
    </CartContext.Provider>
  )

}