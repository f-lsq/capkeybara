import React, {createContext} from 'react';
import ProductServiceLayer from '../service-layer/ProductServiceLayer';

export const ProductContext = createContext();

export default function ProductContextData({children}) {
  
  const serviceOperations = {
    getAllProduct: async () => {
      try {
        const response = await ProductServiceLayer.getAllProduct();
        return response;
      } catch(e) {
        throw new Error(e);
      } 
    },

    getAllCategories: async () => {
      try {
        const response = await ProductServiceLayer.getAllCategories();
        return response;
      } catch(e) {
        throw new Error(e);
      } 
    },

    getProductById: async (productId) => {
      try {
        const response = await ProductServiceLayer.getProductsById(productId);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    getProductsBySeller: async (sellerId) => {
      try {
        const response = await ProductServiceLayer.getProductsBySeller(sellerId);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    createProduct: async (productData) => {
      try {
        const response = await ProductServiceLayer.createProduct(productData);
        return response;
      } catch(e) {
        throw new Error(e);
      }

    },

    updateProduct: async (productId, data) => {
      try {
        const response = await ProductServiceLayer.updateProduct(productId, data);
        return response;
      } catch(e) {
        throw new Error(e);
      }

    },



    deleteProduct: async (productId) => {
      try {
        const response = await ProductServiceLayer.deleteProduct(productId);
        console.log(response);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    }
  }

  return (
    <ProductContext.Provider value={serviceOperations}>
      {children}
    </ProductContext.Provider>
  )

}