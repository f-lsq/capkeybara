import apiRequests from "../api"

const BuyerServiceLayer = {
  createBuyer: async (data) => {
    try {
      const response = await apiRequests.post('/buyers/', "", data)
      return response;
    } catch(e) {
      throw new Error(e);
    }
  },

  login: async (data) => {
    try {
      const response = await apiRequests.post('/buyers/login', "", data)
      return response;
    } catch(e) {
      throw new Error(e);
    }
  },

  logout: async () => {
    try {
      const response = await apiRequests.post('/buyers/logout', "", "");
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getBuyerProfile: async () => {
    try {
      const response = await apiRequests.post('/buyers/profile', "", "");
      return response;
    } catch(e) {
      throw new Error(e);
    }
  },

  getBuyerById: async (params) => {
    try {
      const response = await apiRequests.get('/buyers/', params);
      return response;
    } catch(e) {
      throw new Error(e);
    }
  },

  refreshAccessToken: async (data) => {
    try {
      const response = await apiRequests.post('/buyers/refresh', "", data)
      return response;
    } catch(e) {
      throw new Error(e);
    }
  }
}

export default BuyerServiceLayer;