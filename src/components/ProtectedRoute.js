import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate} from 'react-router-dom';
import { notifyError } from '../utils';

const ProtectedRoute = ({ role, children }) => {
  const authContext = useContext(AuthContext);
  
  if (!authContext.isAuthenticatedBuyer() && role ==="buyer") {
    notifyError("Please login to view the page.", "unauthorisedBuyer");
    return <Navigate to="/login" />;
  } 
  
  if (!authContext.isAuthenticatedSeller() && role ==="seller") {
    notifyError("Please login to view the page.", "unauthorisedSeller");
    return <Navigate to="/seller/login" />;
  }

  return children;
};

export default ProtectedRoute;