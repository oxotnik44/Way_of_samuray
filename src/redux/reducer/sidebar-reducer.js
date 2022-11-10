let initialStore = {
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
};
const sidebarReducer = (state = initialStore, action) => {
    return state
};
export default sidebarReducer;
