import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer/auth-reducer";
import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";
import sidebarReducer from "./reducer/sidebar-reducer";
import usersReducer from "./reducer/users-reducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducer/app-reducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;
