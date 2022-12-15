import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialStore = {
  posts: [
    { message: "Hi, how are you?", like: "15" },
    { message: "Fine", like: "20" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { message: action.postText, like: 40 }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export let addPost = (postText) => {
  return { type: ADD_POST, postText };
};
export let setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export let setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const getUserProfile = (userId) => {
  return (dispatch) => {
    
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;
