import React, {createContext} from 'react';
import OrderServices from '../service-layer/OrderServiceLayer';

export const OrderContext = createContext();

export default function OrderContextData({children}) {
 
  const serviceOperations = {
    getOrders: async (buyerId) => {
      try {
        const response = await OrderServices.getOrders(buyerId);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    },
    createNewOrder: async (buyerId) => {
      try {
        const response = await OrderServices.createNewOrder(buyerId);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    },
    updateOrderStatus: async (orderId, orderStatus) => {
      try {
        const response = await OrderServices.updateOrderStatus(orderId, orderStatus);
        return response;
      } catch(e) {
        throw new Error(e);
      }
    }
  }

  return (
    <OrderContext.Provider value={serviceOperations}>
      {children}
    </OrderContext.Provider>
  )

}