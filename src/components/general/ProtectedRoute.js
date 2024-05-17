import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { notifyError } from '../../utils';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!authContext.isAuthenticatedBuyer() && role === "buyer") {
      notifyError("Please login to view the page.", "unauthorisedBuyer");
    }

    if (!authContext.isAuthenticatedSeller() && role === "seller") {
      notifyError("Please login to view the page.", "unauthorisedSeller");
    }
  });

  if (!authContext.isAuthenticatedBuyer() && role === "buyer") {
    return <Navigate to="/login" />;
  }
  if (!authContext.isAuthenticatedSeller() && role === "seller") {
    return <Navigate to="/seller/login" />;
  }

  return children;
};

export default ProtectedRoute;