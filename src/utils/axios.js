import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL_BACKEND} from '@env';

const axiosApiIntaces = axios.create({
  // baseURL: URL_BACKEND,
  baseURL: 'http://192.168.0.104:3001',
  // baseURL: 'http://192.168.43.155:3001',
});

const setToken = async (token, refreshToken) => {
  try {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {}
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
  } catch (error) {}
};

// Add a request interceptor
axiosApiIntaces.interceptors.request.use(
  async function (config) {
    // Do something before request is sent

    const token = await AsyncStorage.getItem('token');

    // ======
    config.headers = {
      Authorization: `Bearer ${token}`,
    };

    // ======
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosApiIntaces.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  async function (error) {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 403) {
      if (error.response.data.msg === 'jwt expired') {
        axiosApiIntaces
          .post('auth/refresh', {refreshToken})
          .then(res => {
            setToken(res.data.data.token, res.data.data.refreshToken);
          })
          .catch(err => {
            removeToken();
          });
      } else {
        removeToken();
      }
    }

    return Promise.reject(error);
  },
);

export default axiosApiIntaces;
