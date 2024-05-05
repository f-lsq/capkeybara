import apiRequests from "../api"

const CartServiceLayer = {
  addToCart: async (data) => {
    try {
      const response = await apiRequests.post('/cart/add', data)
      return response;
    } catch(e) {
      throw new Error(e);
    }

  }
}

export default CartServiceLayer;