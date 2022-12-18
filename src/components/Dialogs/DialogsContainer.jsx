import { compose } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { addMessage } from "../../redux/reducer/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
class DialogsContainer extends React.Component {
  render() {
    return (
      <Dialogs
        sendMessage={this.props.sendMessage}
        addMessage={this.props.addMessage}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    sendMessage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect
)(DialogsContainer);
