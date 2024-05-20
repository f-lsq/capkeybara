import apiRequests from "../api"

const CartServiceLayer = {
  getCartItem: async (params) => {
    try {
      const response = await apiRequests.get('/cart/', params)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getCartTotalQuantity: async (params) => {
    try {
      const response = await apiRequests.get('/cart/', params)

      if (response) {
        let cartTotalQuantity = 0;
        const cartItems = response.data.cartItems;
        cartItems.forEach((cartItem) => {
          cartTotalQuantity += cartItem.quantity;
        })
        return cartTotalQuantity;
      } else {
        return null
      }
    } catch (e) {
      throw new Error(e);
    }
  },

  getCartTotalPrice: async (params) => {
    try {
      const response = await apiRequests.get('/cart/', params)
      if (response) {
        let cartTotalPrice = 0;
        const cartItems = response.data.cartItems;
        cartItems.forEach((cartItem) => {
          cartTotalPrice += cartItem.quantity * cartItem.product.price;
        })
        return cartTotalPrice;
      } else {
        return null
      }
    } catch (e) {
      throw new Error(e);
    }
  },

  addToCart: async (params, data) => {
    try {
      const response = await apiRequests.post('/cart/', params, data)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  removeFromCart: async (params, data) => {
    try {
      const response = await apiRequests.post('/cart/remove/', params, data)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  updateCartItemQuantity: async (params, data) => {
    try {
      const response = await apiRequests.put('/cart/', params, data)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  removeCartItem: async (params, data) => {
    try {
      const response = await apiRequests.delete('/cart/', params, data)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default CartServiceLayer;