import React, { createContext } from 'react';
import OrderServices from '../service-layer/OrderServiceLayer';

export const OrderContext = createContext();

export default function OrderContextData({ children }) {

  const serviceOperations = {
    getBuyerOrders: async (buyerId) => {
      try {
        const response = await OrderServices.getBuyerOrders(buyerId);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    getSellerOrders: async (sellerId) => {
      try {
        const response = await OrderServices.getSellerOrders(sellerId);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    createNewOrder: async (buyerId) => {
      try {
        const response = await OrderServices.createNewOrder(buyerId);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    updateOrderStatus: async (orderId, orderStatus) => {
      try {
        const response = await OrderServices.updateOrderStatus(orderId, orderStatus);
        return response;
      } catch (e) {
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