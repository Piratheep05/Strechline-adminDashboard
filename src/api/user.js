import axios from 'axios';
import { baseUrl } from './utils';
import axiosInstance from '../helpers/axiosInstance';

export const login = async (body) => {
  return axios.post(`${baseUrl}/login`, body);
};

export const getUser = async () => {
  return axiosInstance.get(`${baseUrl}/user`);
};

export const getUserPermissions = async () => {
  return axiosInstance.get(`${baseUrl}/system/userpermissions`);
};
