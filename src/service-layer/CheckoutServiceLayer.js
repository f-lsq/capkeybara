import apiRequests from "../api"

const CheckoutServiceLayer = {
  getCheckoutSession: async (params) => {
    try {
      const response = await apiRequests.get('/checkout/', params)
      return response;
    } catch(e) {
      throw new Error(e);
    }
  }
}

export default CheckoutServiceLayer;