import React, {createContext} from 'react';
import BuyerServices from '../services/BuyerServices';

export const BuyerContext = createContext();

export default function BuyerContextData({children}) {
  
  const serviceOperations = {
    createBuyer: async (data) => {
      const responseData = await BuyerServices.createBuyer(data);
      return responseData;
    },
    login: async (data) => {
      const responseData = await BuyerServices.login(data);
      return responseData;
    }
  }

  return (
    <BuyerContext.Provider value={serviceOperations}>
      {children}
    </BuyerContext.Provider>
  )

}