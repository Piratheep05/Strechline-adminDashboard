import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../../constants";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Hidden } from "@mui/material";
import { removeToken, setThemeMode, setFullScreen } from "../../../helpers";
import PersonIcon from "@mui/icons-material/Person";
import { logout } from "../../../helpers";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import moment from "moment";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header({
  handleDrawerOpen,
  open,
  handleMobileDrawerOpen,
  isFullScreen,
  setIsFullScreen,
  setOpen,
  appThemeMode,
  setAppThemeMode,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openE1 = Boolean(anchorEl);
  const [time, setTime] = useState(moment().format("hh:mm A"));
  const [date, setDate] = useState(moment().format("YYYY/MM/DD"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm A"));
      setDate(moment().format("YYYY/MM/DD"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = () => {
    if (appThemeMode === "light") {
      setThemeMode("dark");
      setAppThemeMode("dark");
    } else {
      setThemeMode("light");
      setAppThemeMode("light");
    }
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(true);
    setOpen(false);
    setFullScreen();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {!isFullScreen && (
        <AppBar position="fixed" open={open} elevation={4}>
          <Toolbar>
            <Hidden smDown>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleMobileDrawerOpen}
                edge="start"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "text.primary" }}
            ></Typography>
            {/* <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{ mr: 3 }}
              onClick={handleFullScreen}
            >
              <FullscreenIcon />
            </IconButton>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{ mr: 3 }}
              onClick={handleThemeChange}
            >
              {appThemeMode === 'light' ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton> */}
            {/* <Stack display={"flex"}>
              <Typography variant="subtitle1" sx={{ ml: 1, mr: 3 }}>
                Shift P2P :
              </Typography>
              <Typography>
              <SentimentSatisfiedAltIcon />
              </Typography>
            </Stack> */}
            <List sx={{mr:-3}}>
              <ListItem disablePadding sx={{ mr:2 }}>
                <ListItemButton>
                  <ListItemText primary="Shift P2P : " />
                  <ListItemIcon sx={{ color: "#1de9b6" }}>
                    <SentimentSatisfiedAltIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <List sx={{mr:-3}}>
              <ListItem disablePadding sx={{ mr:2 }}>
                <ListItemButton>
                  <ListItemText primary=" Overall P2P : " />
                  <ListItemIcon sx={{ color: "#1de9b6" }}>
                    <SentimentSatisfiedAltIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <Typography variant="subtitle1" sx={{ ml: 1, mr: 3 }}>
              Run time : 18 h
            </Typography>
            <Typography variant="subtitle1" sx={{ ml: 1, mr: 3 }}>
              Stop time : 12 h
            </Typography>

            <AccessTimeIcon />

            <Typography variant="subtitle1" sx={{ ml: 1, mr: 3 }}>
              {time}
            </Typography>
            <DateRangeIcon />
            <Typography variant="subtitle1" sx={{ ml: 1, mr: 1 }}>
              {date}
            </Typography>
            <IconButton
              size="large"
              aria-label="show 5 new notifications"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box>
              <Typography textAlign="center" sx={{ ml: 1, mr: 3 }}>
                EPF
              </Typography>
              <Typography sx={{ ml: 1, mr: 3 }}>2400</Typography>
            </Box>
            <IconButton
              onClick={handleClick}
              edge="start"
              aria-controls={openE1 ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openE1 ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                <PersonIcon />
              </Avatar>{" "}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openE1}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>John Doe</MenuItem>
              <MenuItem>Shift A</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}

export default Header;
