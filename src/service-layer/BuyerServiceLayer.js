import apiRequests from "../api"

const BuyerServiceLayer = {
  createBuyer: async (data) => {
    const response = await apiRequests.post('/buyers/', data)
    return response;
  },
  login: async (data) => {
    const response = await apiRequests.post('/buyers/login', data)
    return response;
  }
}

export default BuyerServiceLayer;