import apiRequests from "../api"

const OrderServiceLayer = {
  getBuyerOrders: async (params) => {
    try {
      const response = await apiRequests.get('/orders/', params);
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getSellerOrders: async (params) => {
    try {
      const response = await apiRequests.get('/orders/seller/', params);
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  createNewOrder: async (params) => {
    try {
      const response = await apiRequests.post('/orders/', params, "");
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  updateOrderStatus: async (params, data) => {
    try {
      const response = await apiRequests.put('/orders/', params, data);
      return response;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default OrderServiceLayer;