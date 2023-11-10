import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';

const IndividualList = ({ route }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id, label, path, icon } = route;

  const getBgColor = () => {
    if (id === 1) {
      return '#F5634A';
    } else if (id === 2) {
      return '#2E80FE';
    } else if (id === 3) {
      return '#6EB8F6';
    } else if (id === 4) {
      return '#F7C560';
    } else if (id === 5) {
      return '#8280F2';
    } else if (id === 6) {
      return '#FE5869';
    } else if (id === 7) {
      return '#54BF8E';
    } else if (id === 8) {
      return '#D05AFF';
    } else {
      return '#2E80FE';
    }
  };

  return (
    <ListItemButton
      selected={pathname.includes(path)}
      onClick={() => navigate(path)}
      sx={{
        '&:hover': {
          backgroundColor: getBgColor(),
        },
        '&.Mui-selected': {
          backgroundColor: getBgColor(),
        },
        '&.Mui-selected:hover': {
          backgroundColor: getBgColor(),
        },
        p: 2,
        backgroundColor: getBgColor(),
      }}
    >
      <ListItemIcon
        sx={{
          color: '#ffffff',
          svg: {
            width: '35px',
            height: '35px',
            width: '100%',
          },
          width: '100%',
        }}
      >
        {icon}
      </ListItemIcon>
      {/* <ListItemText primary={label} sx={{ color: '#ffffff' }} /> */}
    </ListItemButton>
  );
};

export default IndividualList;
