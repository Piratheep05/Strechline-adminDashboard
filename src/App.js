import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import PrivateRoute from './Routes/PrivateRoute';
import StoreProvider from './Store';
import ROUTES from './Routes/config';
import ExternalPrivateRoute from './Routes/ExternalPrivateRoute';

const App = () => {
  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location = '/home';
    }
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <StoreProvider>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            {ROUTES.map((route) => {
              let childRoutes = [];
              let mainRoute = [];

              if (route.main) {
                mainRoute = [
                  <Route
                    key={route.id}
                    path={route.path}
                    element={
                      route.external ? (
                        <ExternalPrivateRoute route={route}>
                          {route.component}
                        </ExternalPrivateRoute>
                      ) : (
                        <PrivateRoute route={route}>
                          {route.component}
                        </PrivateRoute>
                      )
                    }
                  />,
                ];
              }

              if (route.children.length) {
                childRoutes = route.children.map((child) => (
                  <Route
                    key={child.id}
                    path={route.path + child.path}
                    element={
                      child.external ? (
                        <ExternalPrivateRoute route={route} childRoute={child}>
                          {child.component}
                        </ExternalPrivateRoute>
                      ) : (
                        <PrivateRoute route={route} childRoute={child}>
                          {child.component}
                        </PrivateRoute>
                      )
                    }
                  />
                ));
              }
              return [...mainRoute, ...childRoutes];
            })}
          </Routes>
        </StoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
