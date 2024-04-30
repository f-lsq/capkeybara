import React, {createContext} from 'react';
import BuyerServiceLayer from '../service-layer/BuyerServiceLayer';

export const BuyerContext = createContext();

export default function BuyerContextData({children}) {
  
  const serviceOperations = {
    createBuyer: async (data) => {
      const responseData = await BuyerServiceLayer.createBuyer(data);
      return responseData;
    },
    login: async (data) => {
      const responseData = await BuyerServiceLayer.login(data);
      return responseData;
    }
  }

  return (
    <BuyerContext.Provider value={serviceOperations}>
      {children}
    </BuyerContext.Provider>
  )

}