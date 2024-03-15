import { apiClient, token } from './apiClient';

// Auth
export const register = async credentials => {
  const { data } = await apiClient.post('/auth/register', credentials);
  token.set(data.result.user.accessToken);
  return data;
};

export const login = async credentials => {
  const { data } = await apiClient.post('/auth/login', credentials);
  token.set(data.result.user.accessToken);
  return data;
};

export const logout = async () => {
  const { data } = await apiClient.post('/auth/logout');
  token.unset();
  return data;
};

export const verifyEmail = async credentials => {
  const { data } = await apiClient.post('/auth/verify', credentials);
  return data;
};

export const forgotPass = async credentials => {
  const { data } = await apiClient.post('/auth/forgot', credentials);
  return data;
};

export const resetPass = async credentials => {
  const { data } = await apiClient.post('/auth/reset', credentials);
  return data;
};

// Profile
export const getUser = async persistedToken => {
  token.set(persistedToken);
  const { data } = await apiClient.get('/users/current');
  return data;
};

export const updateUser = async formData => {
  const { data } = await apiClient.patch('/users/update', formData);
  return data;
};

export const deleteUser = async () => {
  const { data } = await apiClient.delete('/users/delete');
  return data;
};
