import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navBar: navBarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
