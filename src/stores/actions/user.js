import axios from '../../utils/axios';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: axios.get('/user'),
  };
};

export const updateUser = data => {
  return {
    type: 'UPDATE_USER',
    payload: axios.patch('/user', data),
  };
};

export const updateImage = data => {
  return {
    type: 'UPDATE_IMAGE',
    payload: axios.patch('/user/update-image', data),
  };
};

export const updatePassword = data => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.patch('/user/update-password', data),
  };
};
