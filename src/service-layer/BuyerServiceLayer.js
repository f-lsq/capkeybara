import apiRequests from "../api"

const BuyerServiceLayer = {
  createBuyer: async (data) => {
    try {
      const response = await apiRequests.post('/buyers/', data)
      return response;
    } catch(e) {
      throw new Error(e);
    }

  },
  login: async (data) => {
    try {
      const response = await apiRequests.post('/buyers/login', data)
      return response;
    } catch(e) {
      throw new Error(e);
    }
  }
}

export default BuyerServiceLayer;