import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../utills/user';
import ROUTES from '../constants/routes';

const PrivateRoute = ({ children }) => {
  const user = getCurrentUser();

  return user ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
