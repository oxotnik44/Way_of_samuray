import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

let initialStore = {
  initialized: false,
};

const appReducer = (state = initialStore, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCES,
  };
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
