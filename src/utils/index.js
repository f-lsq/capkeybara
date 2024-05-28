import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/AuthContext';
import { BuyerContext } from '../context/BuyerContext';
import { SellerContext } from '../context/SellerContext';

export const useRefreshAccessToken = () => {
  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);
  const sellerContext = useContext(SellerContext);

  useEffect(() => {
    const interval = setInterval(() => {

      if (authContext.isAuthenticatedBuyer()) {
        buyerContext.refreshAccessToken();
      }
      if (authContext.isAuthenticatedSeller()) {
        sellerContext.refreshAccessToken();
      }
      if (authContext.isAuthenticatedBuyer() || authContext.isAuthenticatedSeller()) {
        console.log("Access Token has been refreshed at", new Date())
      }
    }, 10 * 60 * 1000); // Refresh every 10 minutes
    return () => clearInterval(interval);
  }, [authContext, buyerContext, sellerContext])
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

// Unsorted array
// In this merge sort, we are specifically sorting a simple array, where each element is of a primitive datatype
// Sorting works in JS -> UTF-8, (previously ASCII table)
export const mergeSort = (array) => {
  // all recursive function, we need something called the BASE CASE
  // because recursive functions are similar to the WHILE LOOP -> so it can go on infinitely if there is no base case
  if (array.length <= 1) {
    return array;
  }
  // What this hints is that, we will be breaking down the array until they are of length of 1 ONLY
  // We will have array.length number of arrays in mergesort

  let middleIndex = Math.floor(array.length / 2); // rounding down
  let left = mergeSort(array.slice(0, middleIndex)); //mergeSort on the left half of the array that we sliced
  let right = mergeSort(array.slice(middleIndex));

  // ***** NOTE: slice clones the array -> increases space complexity

  // The actual sorting
  let sortedValues = [];
  let leftIndexSlider = 0;
  let rightIndexSlider = 0; // on each recursion interaction, this will reset to zero, because we initialise again

  while (leftIndexSlider < left.length && rightIndexSlider < right.length) {
    if (left[leftIndexSlider].quantity_sold < right[rightIndexSlider].quantity_sold) {
      sortedValues.push(left[leftIndexSlider]);
      leftIndexSlider += 1;
    } else {
      sortedValues.push(right[rightIndexSlider]);
      rightIndexSlider += 1;
    }
  };

  // this is currently imperfect algorithm because it will have leftover values in the left or right array;

  sortedValues.push(...left.slice(leftIndexSlider));
  sortedValues.push(...right.slice(rightIndexSlider));

  return sortedValues;
}