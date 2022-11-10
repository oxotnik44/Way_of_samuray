import React from "react";
import { connect } from "react-redux";
import {
  addMessage,
  updateNewMessageText,
} from "../../redux/reducer/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    sendMessage: state.dialogsPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageText,
  addMessage,
})(Dialogs);

export default DialogsContainer;
