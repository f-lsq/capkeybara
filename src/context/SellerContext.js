import React, {createContext} from 'react';
import SellerServices from '../service-layer/SellerServiceLayer';

export const SellerContext = createContext();

export default function SellerContextData({children}) {
  
  const serviceOperations = {
    createSeller: async (data) => {
      try {
        const responseData = await SellerServices.createSeller(data);
        return responseData;
      } catch(e) {
        throw new Error(e);
      }

    },
    login: async (data) => {
      try {
        const responseData = await SellerServices.login(data);
        console.log(responseData);
        return responseData;    
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