import FriendsElement from "./FriendsElement";
import s from "./Friends.module.css";
const Friends = (props) => {
  let FriendsElements = props.state.map((f) => (
    <FriendsElement url={f.url} name={f.name} />
  ));
  return (
    <div className={s.item}>
      <ul>
        <li>{FriendsElements}</li>
      </ul>
    </div>
  );
};
export default Friends;
