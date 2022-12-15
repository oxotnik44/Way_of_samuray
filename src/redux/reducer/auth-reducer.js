import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialStore = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData());
      } else {
        let message =
          response.data.messages[0].length > 0
            ? response.data.messages[0]
            : "Error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
