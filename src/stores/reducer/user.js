const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  msg: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // GET USER
    case 'GET_USER_PENDING':
      return {
        ...state,
        data: '',
        isLoading: true,
        isError: false,
        msg: '',
      };
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        data: action.payload.data.data[0],
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: '',
        msg: action.payload.response.data.msg,
      };

    // UPDATE USER
    case 'UPDATE_USER_PENDING':
      return {
        ...state,
        data: '',
        isLoading: true,
        isError: false,
        msg: '',
      };
    case 'UPDATE_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case 'UPDATE_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: '',
        msg: action.payload.response.data.msg,
      };

    // UPDATE PASSWORD
    case 'UPDATE_PASSWORD_PENDING':
      return {
        ...state,
        data: '',
        isLoading: true,
        isError: false,
        msg: '',
      };
    case 'UPDATE_PASSWORD_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case 'UPDATE_PASSWORD_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: '',
        msg: action.payload.response.data.msg,
      };

    default: {
      return state;
    }
  }
};

export default user;
