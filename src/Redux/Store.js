import profileReducer from "./profile-reducer";
import navBarReducer from "./navbar-reducer";
import dialogsReduser from "./dialogs-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, beach!", likesCount: 12 },

        { id: 2, message: "Who are you?", likesCount: 15 },

        { id: 3, message: "I need a car...", likesCount: 22 },
      ],

      newPostText: "Hello!!!",
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Hello world!!!" },

        { id: 2, message: "Privettt" },

        { id: 3, message: "Yo..." },

        { id: 4, message: "Yo..." },

        { id: 5, message: "Yo..." },
      ],

      dialogs: [
        { id: 1, name: "Ivan" },

        { id: 2, name: "Ignat" },

        { id: 3, name: "Irka" },

        { id: 4, name: "Vasia" },

        { id: 5, name: "Viktor" },

        { id: 6, name: "Iana" },
      ],
      newMessageText: "Какой-то текст",
    },
    navBar: [
      {
        id: 1,
        image:
          "https://image.shutterstock.com/shutterstock/photos/629651816/display_1500/stock-vector-vector-frames-circle-for-image-distress-texture-grunge-black-and-white-borders-isolated-on-the-629651816.jpg",
        name: "Ivan",
      },
      {
        id: 2,
        image:
          "https://image.shutterstock.com/shutterstock/photos/629651816/display_1500/stock-vector-vector-frames-circle-for-image-distress-texture-grunge-black-and-white-borders-isolated-on-the-629651816.jpg",
        name: "Den",
      },
      {
        id: 3,
        image:
          "https://image.shutterstock.com/shutterstock/photos/629651816/display_1500/stock-vector-vector-frames-circle-for-image-distress-texture-grunge-black-and-white-borders-isolated-on-the-629651816.jpg",
        name: "Drakon",
      },
    ],
  },

  _callSubscriber() {
    // заготовка для использования при колл-бэке
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // пустой _callSubscriber === _callSubscriber (при изменении UI) из index
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.navBar = navBarReducer(this._state.navBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
