import React, {createContext} from 'react';
import CheckoutServices from '../service-layer/CheckoutServiceLayer';

export const CheckoutContext = createContext();

export default function CheckoutContextData({children}) {
 
  const serviceOperations = {
    getCheckoutSession: async (buyerId) => {
      try {
        const response = await CheckoutServices.getCheckoutSession(buyerId);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    }
  }

  return (
    <CheckoutContext.Provider value={serviceOperations}>
      {children}
    </CheckoutContext.Provider>
  )

}