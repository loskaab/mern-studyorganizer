import axios from 'axios';
import { toast } from 'react-toastify';

import { store } from 'store/store';
import { authenticate } from 'store/auth/authSlice';

import { baseURL } from './baseURL';

// axios instance
const apiClient = axios.create({ baseURL });

// set token
const token = {
  set(token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiClient.defaults.headers.common.Authorization = '';
  },
};

// response interseptor
apiClient.interceptors.response.use(
  resp => {
    const { message, result } = resp.data;

    !message?.includes('Found') && message && toast.success(message);

    !message &&
      result?.user?.verificationCode === 'google' &&
      store.getState().auth.user.verificationCode !== 'google' &&
      toast.success(`Logged in: ${result.user.email}`);

    return resp;
  },
  async err => {
    if (err.response.status === 401) {
      try {
        const { refreshToken } = store.getState().auth.user;
        if (!refreshToken) {
          return Promise.reject(err);
        }
        apiClient.defaults.headers.common['refreshtoken'] = refreshToken;
        err.config.headers.refreshtoken = `${refreshToken}`;
        const { data } = await apiClient.post('/auth/refresh');
        const { accessToken } = data.result.user;

        token.set(accessToken);
        await store.dispatch(authenticate(data));
        err.config.headers.Authorization = `Bearer ${accessToken}`;

        return apiClient(err.config);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    toast.error(err.response.data.message);
    return Promise.reject(err);
  },
);

export { apiClient, token };
