import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestProducts = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestOrders = async (endpoint, body) => {
  console.log(body);
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

export const getProductSale = async (endpoint, params) => {
  const { data } = await api.get(endpoint, params);
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
