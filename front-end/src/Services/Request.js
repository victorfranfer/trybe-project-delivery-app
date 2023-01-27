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

export const requestOrders = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const createNewSale = async (endpoint, body) => {
  console.log(body);
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestSellers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}

// export const requestToken = async () => {
//   const { error } = await api.post('/validate');
//   return error;
// };

// export const setToken = (token) => {
//   api.defaults.headers.common.token = token;
// };

export default api;
