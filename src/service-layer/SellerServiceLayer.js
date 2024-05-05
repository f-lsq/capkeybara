import apiRequests from "../api"

const SellerServiceLayer = {
  createSeller: async (data) => {
    try {
      const response = await apiRequests.post('/sellers/', data)
      return response;
    } catch(e) {
      throw new Error(e);
    }

  },
  login: async (data) => {
    try {
      const response = await apiRequests.post('/sellers/login', data)
      return response;
    } catch(e) {
      throw new Error(e);
    }
  },

  getSellerById: async (params) => {
    try {
      const response = await apiRequests.get('/sellers/', params)
      return response;
    } catch(e) {
      throw new Error(e);
    }
  }
}

export default SellerServiceLayer;