import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import CssBaseline from '@mui/material/CssBaseline';
import { getThemeMode } from '../../helpers';

const MainLayout = ({ children, route, childRoute }) => {
  const [appThemeMode, setAppThemeMode] = useState('dark');

  useEffect(() => {
    if (getThemeMode()) {
      setAppThemeMode(getThemeMode());
    }
  }, []);

  return (
    <ThemeProvider theme={theme(appThemeMode)}>
      <CssBaseline />
      <Layout
        appThemeMode={appThemeMode}
        setAppThemeMode={setAppThemeMode}
        route={route}
        childRoute={childRoute}
      >
        {children}
      </Layout>
    </ThemeProvider>
  );
};

export default MainLayout;
