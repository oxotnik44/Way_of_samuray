import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";
import ellipsisMessage from "./../../../assets/img-message/ellipsisMessage.png";
const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      {props.sendMessage.dialogs.map((d) => (
        <div style={{ display: "flex" }} className={s.blockMessage}>
          <div>
            <img src={d.url} className={s.imgUsers} />
          </div>
          <div>
            <NavLink className={s.nameUsers}>{d.name}</NavLink>
            <div className={s.textUser}>{d.message}</div>
          </div>
          <img src={ellipsisMessage} className={s.imgEllipsisMessage}/>
        </div>
      ))}
    </div>
  );
};
export default Messages;
