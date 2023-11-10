import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { drawerWidth } from '../../../constants';
import SidebarList from './SidebarList';
import { colors } from '../../../constants';
import { useTheme } from '@mui/material/styles';

function SideBar({
  open,
  handleDrawerOpen,
  handleMobileDrawerOpen,
  mobileOpen,
  window,
}) {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();

  const logoArea = () => {
    return (
      <Box
        flex={1}
        display='flex'
        alignItems='flex-end'
        sx={{ background: theme.palette.background.paper }}
      >
        <Box sx={{ width: 1 }}>
          <Box display='flex'>
            {colors.map((color, idx) => (
              <Box
                sx={{ height: 8, width: 1 / 5, background: color }}
                key={idx}
              />
            ))}
          </Box>
          <Box
            // p={2}
            display='flex'
            justifyContent='center'
            width='100%'
            // sx={{ backgroundColor: '#262b39' }}
          >
            <img
              src='/xo-logo-new.png'
              alt=''
              style={{
                width: 95,
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      component='nav'
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label='mailbox folders'
    >
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleMobileDrawerOpen}
        ModalProps={{
          keepMounted: true,
        }}
        elevation={0}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: theme.palette.background.paper,
            borderRight: '1px solid rgba(255, 255, 255, 0.12)',
          },
        }}
      >
        <SidebarList />
        {logoArea()}
      </Drawer>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: theme.palette.background.paper,
            borderRight: '1px solid rgba(255, 255, 255, 0.12)',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
        onClose={handleDrawerOpen}
        elevation={2}
      >
        <SidebarList />

        {logoArea()}
      </Drawer>
    </Box>
  );
}

export default SideBar;
