import React, {createContext} from 'react';
import SellerServices from '../service-layer/SellerServiceLayer';

export const SellerContext = createContext();

export default function SellerContextData({children}) {
  
  const serviceOperations = {
    createSeller: async (data) => {
      try {
        const response = await SellerServices.createSeller(data);
        return response;
      } catch(e) {
        throw new Error(e);
      }

    },
    login: async (data) => {
      try {
        const response = await SellerServices.login(data);
        return response;    
      } catch(e) {
        throw new Error(e);
      }

    },

    getSellerById: async (sellerId) => {
      try {
        const response = await SellerServices.getSellerById(sellerId);
        return response;    
      } catch(e) {
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