import React, {createContext} from 'react';
import BuyerServiceLayer from '../service-layer/BuyerServiceLayer';

export const BuyerContext = createContext();

export default function BuyerContextData({children}) {
  
  const serviceOperations = {
    createBuyer: async (data) => {
      try {
        const responseData = await BuyerServiceLayer.createBuyer(data);
        return responseData;
      } catch(e) {
        throw new Error(e);
      }

    },
    login: async (data) => {
      try {
        const responseData = await BuyerServiceLayer.login(data);
        return responseData;
      } catch(e) {
        throw new Error(e);
      }
    }
  }

  return (
    <BuyerContext.Provider value={serviceOperations}>
      {children}
    </BuyerContext.Provider>
  )

}