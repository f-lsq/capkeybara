import React, { useContext, useEffect } from 'react';
import { BuyerContext } from '../context/BuyerContext';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useRefreshAccessToken = () => {
  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);

    useEffect(() => {
      const interval = setInterval(() => {
        if (authContext.isAuthenticatedBuyer()) {
          buyerContext.refreshAccessToken();
          console.log("Access Token has been refreshed")
        }
      }, 5000);

      return () => clearInterval(interval);
    }, [])

}

export const notifyInfo = (message, toastId) => {
  toast.info(message, {
    autoClose: 2000,
    toastId: toastId // prevents duplicate
  });
}

export const notifyError = (message, toastId) => {
  toast.error(message, {
    autoClose: 2000,
    toastId: toastId // prevents duplicate
  });
}

export const notifySuccess = (message, toastId) => {
  toast.success(message, {
    autoClose: 2000,
    toastId: toastId // prevents duplicate
  });
}

export const notifyWarn = (message, toastId) => {
  toast.warn(message, {
    autoClose: 2000,
    toastId: toastId // prevents duplicate
  });
}


// export default { 
//   useRefreshAccessToken,
//   notifyInfo,
//   notifyError,
//   notifySuccess,
//   notifyWarn
//  };