import React from 'react';
import { styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    userSelect: 'none',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '& .MuiChip-icon': { fontSize: 20 },
  };
});

const Breadcrumb = ({ route, childRoute }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (route.main) {
      navigate(route.path);
    } else {
      navigate(route.path + route.children[0].path);
    }
  };

  const findLabel = (label, path) => {
    const splittedPaths = pathname.split('/');

    if (label.startsWith(':')) {
      let findedLabel = '';
      path.split('/').forEach((p, idx) => {
        if (p === label) {
          findedLabel = splittedPaths[idx];
        }
      });
      return findedLabel;
    } else {
      return label;
    }
  };

  const findAndNavigate = (path) => {
    const splittedPaths = pathname.split('/');

    const findedPath = path
      .split('/')
      .map((p, idx) => {
        if (p.startsWith(':')) {
          return splittedPaths[idx];
        } else {
          return p;
        }
      })
      .join('/');

    navigate(findedPath);
  };

  return (
    <div role='presentation'>
      {childRoute ? (
        <Breadcrumbs aria-label='breadcrumb'>
          <StyledBreadcrumb
            label={route.label}
            icon={route.icon}
            onClick={() => handleClick(route)}
          />

          {childRoute.breadcrumb.map((breadcrumb, idx) => (
            <StyledBreadcrumb
              label={findLabel(breadcrumb.label, breadcrumb.path)}
              key={idx}
              onClick={() => findAndNavigate(breadcrumb.path)}
            />
          ))}
        </Breadcrumbs>
      ) : (
        <Breadcrumbs aria-label='breadcrumb'>
          <StyledBreadcrumb label={route.label} icon={route.icon} />
        </Breadcrumbs>
      )}
    </div>
  );
};

export default Breadcrumb;
