/**
 * This is used for authenticated routes and components come from other modules
 */

import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import ErrorBoundary from '../Components/ErrorBoundary';
import PageLoader from '../Components/PageLoader';
import MainLayout from '../Components/MainLayout';
import { isAuthenticated } from '../helpers';

export default function ExternalPrivateRoute({ children, route, childRoute }) {
  return isAuthenticated() ? (
    <Suspense fallback={<PageLoader />}>
      <ErrorBoundary>
        <MainLayout route={route} childRoute={childRoute}>
          {children}
        </MainLayout>
      </ErrorBoundary>
    </Suspense>
  ) : (
    <Navigate to='/login' />
  );
}
