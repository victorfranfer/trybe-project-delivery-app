import axios from 'axios';


const HOST = process.env.REACT_APP_API_HOST || "localhost:3001";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const get = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const put = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export const requestRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestProducts = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestOrders = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const createNewSale = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getProductSale = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestAdminRegister = async (endpoint, body, headers) => {
  const { data } = await api.post(endpoint, body, headers);
  return data;
};

export const requestUser = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestAllUsers = async (endpoint, headers) => {
  const { data } = await api.get(endpoint, headers);
  return data;
};

export const requestDeleteUser = async (endpoint, body) => {
  const { data } = await api.delete(endpoint, body);
  return data;
};

// export const requestToken = async () => {
//   const { error } = await api.post('/validate');
//   return error;
// };
export const requestSellers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const validateToken = async () => {
  const { error } = await api.post('/validate');
  return error;
};

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default api;
