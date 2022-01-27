const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, beach!", likesCount: 12 },

    { id: 2, message: "Who are you?", likesCount: 15 },

    { id: 3, message: "I need a car...", likesCount: 22 },
  ],
  newPostText: "Hello!!!",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = { id: 5, message: state.newPostText, likesCount: 0 };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "", // зануление
      };
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;
