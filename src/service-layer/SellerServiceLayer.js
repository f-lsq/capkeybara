import apiRequests from "../api"

const SellerServiceLayer = {
  createSeller: async (data) => {
    try {
      const response = await apiRequests.post('/sellers/', '', data)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  login: async (data) => {
    try {
      const response = await apiRequests.post('/sellers/login', '', data)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  logout: async () => {
    try {
      const response = await apiRequests.post('/sellers/logout', "", "");
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getSellerProfile: async () => {
    try {
      const response = await apiRequests.post('/sellers/profile', "", "");
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getSellerById: async (params) => {
    try {
      const response = await apiRequests.get('/sellers/', params)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  refreshAccessToken: async (data) => {
    try {
      const response = await apiRequests.post('/sellers/refresh', "", data)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default SellerServiceLayer;