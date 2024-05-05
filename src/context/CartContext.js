import React, {createContext} from 'react';
import CartServices from '../service-layer/CartServiceLayer';

export const CartContext = createContext();

export default function CartContextData({children}) {
  
  const serviceOperations = {
    createSeller: async (data) => {
      try {
        const response = await SellerServices.createSeller(data);
        return response;
      } catch(e) {
        throw new Error(e);
      }

    }
  }

  return (
    <CartContext.Provider value={serviceOperations}>
      {children}
    </CartContext.Provider>
  )

}