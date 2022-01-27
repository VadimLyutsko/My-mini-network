import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";

const mapStateToProps = state => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
