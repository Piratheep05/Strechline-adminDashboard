/**
 * This is used for authenticated routes and components only inside this module
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import { isAuthenticated } from '../helpers';

export default function PrivateRoute({ children, route, childRoute }) {
  return isAuthenticated() ? (
    <MainLayout route={route} childRoute={childRoute}>
      {children}
    </MainLayout>
  ) : (
    <Navigate to='/login' />
  );
}
