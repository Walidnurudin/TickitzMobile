import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL_BACKEND} from '@env';

console.log(URL_BACKEND);

const axiosApiIntaces = axios.create({
  baseURL: URL_BACKEND,
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

axiosApiIntaces.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem('token');

    config.headers = {
      Authorization: `Bearer ${token}`,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosApiIntaces.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const refreshToken = await AsyncStorage.getItem('refreshToken');

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
