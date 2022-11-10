import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";
import sidebarReducer from "./reducer/sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi, how are you?", like: "15" },
        { message: "Fine", like: "20" },
      ],
      newPostText: "Way_of_samuray",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 0,
          name: "Artem",
          url: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
        },
        {
          id: 1,
          name: "Sasha",
          url: "https://mobimg.b-cdn.net/v3/fetch/f9/f9f2de5608f00f96a18f470547e52bef.jpeg?w=1470&r=0.5625",
        },
        {
          id: 3,
          name: "Victor",
          url: "https://mobimg.b-cdn.net/v3/fetch/f9/f9f2de5608f00f96a18f470547e52bef.jpeg?w=1470&r=0.5625",
        },
      ],
      messages: [
        { id: 0, message: "Hi" },
        { id: 1, message: "Yo" },
        { id: 2, message: "HU" },
      ],
      newMessageText: "Hello",
    },

    sidebar: {
      friends: [
        {
          name: "Sasha",
          url: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
        },
        {
          name: "Ivan",
          url: "https://mobimg.b-cdn.net/v3/fetch/f9/f9f2de5608f00f96a18f470547e52bef.jpeg?w=1470&r=0.5625",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
