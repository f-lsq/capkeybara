import apiRequests from "../api"

const ProductServiceLayer = {
  getAllProduct: async () => {
    try {
      const response = await apiRequests.get('/products/', "")
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getAllCategories: async () => {
    try {
      const response = await apiRequests.get('/products/categories/', "")
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getProductsById: async (params) => {
    try {
      const response = await apiRequests.get('/products/', params)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  getProductsBySeller: async (params) => {
    try {
      const response = await apiRequests.get('/products/seller/', params)
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },

  createProduct: async (params) => {
    try {
      const response = await apiRequests.post('/products/', params, '')
      return response;
    } catch(e) {
      throw new Error(e);
    }

  },

  updateProduct: async (params, data) => {
    try {
      const response = await apiRequests.put('/products/', params, data)
      return response;
    } catch(e) {
      throw new Error(e);
    }

  },

  deleteProduct: async (params) => {
    try {
      const response = await apiRequests.delete('/products/', params, '')
      return response;
    } catch(e) {
      throw new Error(e);
    }

  }
}

export default ProductServiceLayer;