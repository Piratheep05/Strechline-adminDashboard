import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from 'react-router-dom';

const NestedList = ({ route }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { id, label, children, path, icon } = route;

  const handleClick = () => {
    setOpen(!open);
  };

  const shapePath = (path) => {
    let url = '';
    path
      .split('/')
      .filter((s) => s && !s.startsWith(':'))
      .map((s) => (url = url + '/' + s))
      .toString();

    return url;
  };

  useEffect(() => {
    children.forEach((child) => {
      if (pathname.includes(shapePath(path + child.path))) {
        setOpen(true);
      }
    });
  }, []);

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ color: '#ffffff' }}>{icon}</ListItemIcon>
        <ListItemText primary={label} sx={{ color: '#ffffff' }} />
        {open ? (
          <ExpandLess sx={{ color: '#ffffff' }} />
        ) : (
          <ExpandMore sx={{ color: '#ffffff' }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {children.map((child, idx) => {
            if (!child.hideFromSidebar) {
              return (
                <ListItemButton
                  sx={{
                    pl: 4,
                    '&:hover': {
                      backgroundColor: 'rgba(35,39,47,255)',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(80, 72, 229, 0.16)',
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: 'rgba(80, 72, 229, 0.16)',
                    },
                  }}
                  key={idx}
                  selected={pathname.includes(shapePath(path + child.path))}
                  onClick={() => navigate(path + child.path)}
                >
                  <ListItemIcon sx={{ color: '#ffffff' }}>
                    {child.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={child.label}
                    sx={{ color: '#ffffff' }}
                  />
                </ListItemButton>
              );
            }
          })}
        </List>
      </Collapse>
    </>
  );
};

export default NestedList;
