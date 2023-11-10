export const setToken = (token) => {
  localStorage.setItem('TOKENS', JSON.stringify(token));
};

export const removeToken = () => {
  localStorage.removeItem('TOKENS');
};

export const isAuthenticated = () => {
  return localStorage.getItem('TOKENS');
};

export const getTokens = () => {
  return JSON.parse(localStorage.getItem('TOKENS'));
};

export const logout = () => {
  localStorage.removeItem('TOKENS');
  localStorage.removeItem('userDetails');
  localStorage.removeItem('userPermissions');
  window.location = '/login';
};

export const getThemeMode = () => {
  return JSON.parse(localStorage.getItem('themeMode'));
};

export const setThemeMode = (mode) => {
  localStorage.setItem('themeMode', JSON.stringify(mode));
};

export const getFullScreen = () => {
  return JSON.parse(localStorage.getItem('fullscreen'));
};

export const setFullScreen = () => {
  localStorage.setItem('fullscreen', JSON.stringify(true));
};

export const removeFullScreen = () => {
  localStorage.removeItem('fullscreen');
};

export const setUserDetails = (userDetails) => {
  localStorage.setItem('userDetails', JSON.stringify(userDetails));
};

export const setUserPermissions = (userPermissions) => {
  localStorage.setItem('userPermissions', JSON.stringify(userPermissions));
};
