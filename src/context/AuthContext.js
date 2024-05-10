import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export default function AuthContextData({children}) {

  // Rationale for storing 'loginStatus' and 'userRole' in sessions rather than local storage
  // - These information are typically session-specific and can be cleared when a user closes their browser
  //   which will ensure security and privacy 

  const serviceOperations = {
    login: (role) => {
      sessionStorage.setItem('loginStatus', true)
      sessionStorage.setItem('userRole', role)
    },

    logout: () => {
      sessionStorage.removeItem('loginStatus')
      sessionStorage.removeItem('userRole')
    },

    isAuthenticatedBuyer: () => {
      const loginStatus = sessionStorage.getItem('loginStatus');
      const userRole = sessionStorage.getItem('userRole');
      console.log(loginStatus && userRole === "buyer")
      return loginStatus && userRole === "buyer";
    },

    isAuthenticatedSeller: () => {
      const loginStatus = sessionStorage.getItem('loginStatus');
      const userRole = sessionStorage.getItem('userRole');
      return loginStatus && userRole === "seller";
    }
  }

  return (
    <AuthContext.Provider value={serviceOperations}>
      {children}
    </AuthContext.Provider>
  )

}