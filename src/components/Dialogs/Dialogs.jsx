import React from "react";
import MessagesReduxForm from "./AddMessagesForm/AddMessagesForm";
import s from "./Dialogs.module.css";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  let addNewMessage = (values) => {
    props.addMessage(values.newMessagesBody);
  };
  return (
    <div>
      <div className={s.dialogsField}>
        <MessagesReduxForm onSubmit={addNewMessage} />
      </div>
      <div className={s.dialogs}>
        <Messages {...props} />
      </div>
    </div>
  );
};

export default Dialogs;
