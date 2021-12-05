import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL_BACKEND} from '@env';

const axiosApiIntaces = axios.create({
  // baseURL: URL_BACKEND,
  baseURL: 'http://192.168.0.104:3001',
});

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
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // if (error.response.status === 403) {
    //   alert("ada kesalahan token");
    //   localStorage.clear();
    //   window.location.href = "/login";
    // }

    return Promise.reject(error);
  },
);

export default axiosApiIntaces;
