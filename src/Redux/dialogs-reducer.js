const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 1, message: "Hello world!!!" },

    { id: 2, message: "Privet" },

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
  newMessageText: "Some text",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      return {
        ...state,
        newMessageText: action.newText,
      };
    case "ADD-MESSAGE":
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 6, message: state.newMessageText }],
      };
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export const sendMessageCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;
