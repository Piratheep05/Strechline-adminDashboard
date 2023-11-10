import { createTheme } from '@mui/material/styles';

const theme = (themeMode) =>
  createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#2d81fe',
      },
      secondary: { main: '#bb70e6' },
      background: {
        paper: themeMode === 'light' ? '#ffffff' : '#2f334e',
        default: themeMode === 'light' ? '#f9fafc' : '#282a41',
      },
      common: { background: themeMode === 'light' ? '#f0f0f0' : '#262b39' },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: { background: themeMode === 'light' ? '#ffffff' : '#2f334e' },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: { color: themeMode === 'light' ? '#2f334e' : '#ffffff' },
        },
      },
    },

    typography: {
      fontFamily: [
        'Poppins',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
      ].join(','),
    },
  });

export default theme;
