import React, {createContext} from 'react';
import SellerServiceLayer from '../service-layer/SellerServiceLayer';

export const SellerContext = createContext();

export default function SellerContextData({children}) {
  
  const serviceOperations = {
    createSeller: async (data) => {
      try {
        const response = await SellerServiceLayer.createSeller(data);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    },

    login: async (data) => {
      try {
        const response = await SellerServiceLayer.login(data);
        return response;    
      } catch(e) {
        throw new Error(e);
      }
    },

    logout: async () => {
      try {
        const response = await SellerServiceLayer.logout();
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    getSellerProfile: async () => {
      try {
        const response = await SellerServiceLayer.getSellerProfile();
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    getSellerId: async () => {
      try {
        const response = await SellerServiceLayer.getSellerProfile();
        return response.data.payload.id;
      } catch (e) {
        throw new Error(e);
      }
    },

    getSellerById: async (sellerId) => {
      try {
        const response = await SellerServiceLayer.getSellerById(sellerId);
        return response;    
      } catch(e) {
        throw new Error(e);
      }
    },

    refreshAccessToken: async () => {
      try {
        const response = await SellerServiceLayer.refreshAccessToken();
        return response;
      } catch (e) {
        throw new Error(e);
      }
    }
  }

  return (
    <SellerContext.Provider value={serviceOperations}>
      {children}
    </SellerContext.Provider>
  )

}