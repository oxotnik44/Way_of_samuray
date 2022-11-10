import {  combineReducers, legacy_createStore } from "redux";
import authReducer from "./reducer/auth-reducer";
import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";
import sidebarReducer from "./reducer/sidebar-reducer";
import usersReducer from "./reducer/users-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer
})

let store = legacy_createStore(reducers);

window.store = store
export default store