import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './Header';
import { drawerWidth } from '../../constants';
import SideBar from './SideBar';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { removeFullScreen, getFullScreen } from '../../helpers';
import Breadcrumb from './Breadcrumb';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function Layout({
  children,
  appThemeMode,
  setAppThemeMode,
  route,
  childRoute,
}) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const isSmallViewPort = useMediaQuery(theme.breakpoints.down('sm'));
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen((c) => !c);
  };

  const handleMobileDrawerOpen = () => {
    setMobileOpen((c) => !c);
  };

  useEffect(() => {
    if (isSmallViewPort) {
      setOpen(false);
    }
  }, [isSmallViewPort]);

  useEffect(() => {
    if (getFullScreen()) {
      setIsFullScreen(true);
      setOpen(false);
    }
  }, []);

  const handleExitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    if (!isSmallViewPort) {
      setOpen(true);
    }
    setIsFullScreen(false);
    removeFullScreen();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        setOpen={setOpen}
        appThemeMode={appThemeMode}
        setAppThemeMode={setAppThemeMode}
      />

      <SideBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        mobileOpen={mobileOpen}
      />

      <Main open={open} sx={{ p: 0 }}>
        {!isFullScreen && (
          <>
            <Toolbar />
            {/* <Box mb={3}>
              <Breadcrumb route={route} childRoute={childRoute} />
            </Box> */}
          </>
        )}

        {children}
      </Main>

      {isFullScreen && (
        <>
          <Fab
            sx={{ position: 'fixed', top: 16, left: 16 }}
            aria-label='sidebar-fab'
            size='small'
            onClick={() => setMobileOpen(true)}
            color='primary'
          >
            <MenuIcon />
          </Fab>
          <Fab
            sx={{ position: 'fixed', top: 16, right: 16 }}
            aria-label='fullscreen-fab'
            size='small'
            onClick={handleExitFullscreen}
            color='primary'
          >
            <FullscreenExitIcon />
          </Fab>
        </>
      )}
    </Box>
  );
}

export default Layout;
