const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialStore = {
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
};
const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: 3, message: state.newMessageText }],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    default:
      return state;
  }
};
export let addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export let updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
