import axios from "axios";


const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
axios.defaults.withCredentials = true; // To use cookies

const apiRequests = {

  /**
   * 
   * @param {string} endpoint 
   * @param {JSON} data 
   */
  get: async (endpoint, params) => {
    try {
      const response = await axios.get(`${BASE_API_URL}${endpoint}${params}`)
      return response;
    } catch (e) {
      return null;
    }
  },

  post: async (endpoint, params, data) => {
    try {
      const response = await axios.post(`${BASE_API_URL}${endpoint}${params}`, data)
      return response;
    } catch (e) {
      return null;
    }
  },

  put: async (endpoint, params, data) => {
    try {
      const response = await axios.put(`${BASE_API_URL}${endpoint}${params}`, data)
      return response;
    } catch (e) {
      return null;
    }
  },

  delete: async (endpoint, params, data) => {
    try {
      const response = await axios.delete(`${BASE_API_URL}${endpoint}${params}`, {
        data: data
      })
      return response;
    } catch (e) {
      return null;
    }
  },
}

export default apiRequests;