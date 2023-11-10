import React from 'react';
import List from '@mui/material/List';
import IndividualList from './IndividualList';
import NestedList from './NestedList';
import ROUTES from '../../../../Routes/config';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
}));

const SidebarList = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.background.paper }}>
      <DrawerHeader>
        <Box
          width='100%'
          height='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <img src='/stretchline_logo.png' alt='' style={{ width: 90 }} />
        </Box>
      </DrawerHeader>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          background: theme.palette.background.paper,
        }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        {ROUTES.map((route, idx) => {
          if (
            route.children.length &&
            route.children.filter((c) => !c.hideFromSidebar).length
          ) {
            return <NestedList route={route} key={idx} />;
          } else if (!route.hideFromSidebar) {
            return <IndividualList route={route} key={idx} />;
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarList;
