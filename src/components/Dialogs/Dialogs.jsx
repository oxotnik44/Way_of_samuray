import React, { useRef } from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  let dialogsElements = props.sendMessage.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} key ={d.id} url={d.url} />
  ));
  let messagesElements = props.sendMessage.messages.map((m) => (
    <Messages id={m.id} key ={m.id} message={m.message} />
  ));

  let onChangeMessage = (e) => {
    let newMessageText = e.target.value;
    props.updateNewMessageText(newMessageText);
  };
  let onAddMessage = () => {
    props.addMessage();
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            onChange={onChangeMessage}
            value={props.sendMessage.newMessageText}
          />
        </div>
        <div>
          <button onClick={onAddMessage}>Добавить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
