import React, {createContext} from 'react';
import SellerServices from '../service-layer/SellerServiceLayer';

export const SellerContext = createContext();

export default function SellerContextData({children}) {
  
  const serviceOperations = {
    createSeller: async (data) => {
      const responseData = await SellerServices.createSeller(data);
      return responseData;
    },
    login: async (data) => {
      const responseData = await SellerServices.login(data);
      return responseData;
    }
  }

  return (
    <SellerContext.Provider value={serviceOperations}>
      {children}
    </SellerContext.Provider>
  )

}