import { useContext, useEffect } from 'react';
import { BuyerContext } from '../context/BuyerContext';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useRefreshAccessToken = () => {
  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);

    useEffect(() => {
      const interval = setInterval(() => {
        console.log('isAuthenticatedBuyer', authContext.isAuthenticatedBuyer())
        if (authContext.isAuthenticatedBuyer()) {
          buyerContext.refreshAccessToken();
          console.log("Access Token has been refreshed")
        }
      }, 10 * 60 * 1000);

      return () => clearInterval(interval);
    })

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

export const convertDateTime = (ISODate) => {
  const date = new Date(ISODate);
  const localDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000)); // convert UTC time to local time

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const hours = localDate.getHours();
  const minutes = localDate.getMinutes();

  // convert hours to 12-hour format and determine AM/PM
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}, ${formattedHours}:${minutes.toString().padStart(2, '0')}${period}`;
  return formattedDate;
}