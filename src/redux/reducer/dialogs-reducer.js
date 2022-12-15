const ADD_MESSAGE = "ADD-MESSAGE";
let initialStore = {
  dialogs: [
    {
      id: 0,
      name: "Artem",
      url: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
      message: "Hi" 
    },
    {
      id: 1,
      name: "Sasha",
      url: "https://mobimg.b-cdn.net/v3/fetch/f9/f9f2de5608f00f96a18f470547e52bef.jpeg?w=1470&r=0.5625",
      message: "Yo"
    },
    {
      id: 3,
      name: "Victor",
      url: "https://mobimg.b-cdn.net/v3/fetch/f9/f9f2de5608f00f96a18f470547e52bef.jpeg?w=1470&r=0.5625",
      message: "HU"
    },
  ],
};
const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        dialogs: [...state.dialogs, { id: 3, name:"HO?", url:"https://uprostim.com/wp-content/uploads/2021/01/image151-19.jpg", message: action.newMessagesBody }],
      };
    }
    default:
      return state;
  }
};
export let addMessage = (newMessagesBody) => {
  return {
    type: ADD_MESSAGE,
    newMessagesBody
  };
};


export default dialogsReducer;
