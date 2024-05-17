import React, { createContext } from 'react';
import BuyerServiceLayer from '../service-layer/BuyerServiceLayer';

export const BuyerContext = createContext();

export default function BuyerContextData({ children }) {

  const serviceOperations = {
    createBuyer: async (data) => {
      try {
        const response = await BuyerServiceLayer.createBuyer(data);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    login: async (data) => {
      try {
        const response = await BuyerServiceLayer.login(data);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    logout: async () => {
      try {
        const response = await BuyerServiceLayer.logout();
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    getBuyerProfile: async () => {
      try {
        const response = await BuyerServiceLayer.getBuyerProfile();
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    getBuyerId: async () => {
      try {
        const response = await BuyerServiceLayer.getBuyerProfile();
        return response.data.payload.id;
      } catch (e) {
        throw new Error(e);
      }
    },

    getBuyerById: async (buyerId) => {
      try {
        const response = await BuyerServiceLayer.getBuyerById(buyerId);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    refreshAccessToken: async () => {
      try {
        const response = await BuyerServiceLayer.refreshAccessToken();
        return response;
      } catch (e) {
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