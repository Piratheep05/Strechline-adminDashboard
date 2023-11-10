import axios from 'axios';
import { baseUrl } from '../api/utils';
import { getTokens, setToken, removeToken } from '../helpers';

let refreshFlag = true;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const requestHandler = (request) => {
  const TOKENS = getTokens();

  if (TOKENS && !request.headers.Authorization) {
    request.headers.Authorization = TOKENS
      ? 'Bearer ' + TOKENS.AccessToken
      : null;
  }

  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = async (error) => {
  const TOKENS = getTokens();
  const originalConfig = error.config;

  // if (
  //   originalConfig.url !== baseUrl + '/auth/token/refresh' &&
  //   error.response
  // ) {
  //   if (
  //     error.response.status === 401 &&
  //     !originalConfig._retry &&
  //     refreshFlag
  //   ) {
  //     originalConfig._retry = true;
  //     refreshFlag = false;

  //     try {
  //       const rs = await axios.post(baseUrl + '/auth/token/refresh', {
  //         refresh_token: TOKENS ? TOKENS.RefreshToken : null,
  //       });

  //       setToken(JSON.stringify(rs.data));
  //       axiosInstance.defaults.headers['Authorization'] =
  //         'Bearer ' + rs.data.AccessToken;
  //       originalConfig.headers['Authorization'] =
  //         'Bearer ' + rs.data.AccessToken;

  //       refreshFlag = true;

  //       return axiosInstance(originalConfig);
  //     } catch (_error) {
  //       refreshFlag = true;
  //       removeToken();

  //       return Promise.reject(_error);
  //     }
  //   }
  // } else if (originalConfig.url === baseUrl + '/auth/token/refresh') {
  //   removeToken();
  //   window.location = '/login';
  // }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
