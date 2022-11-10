const FriendsElement = (props) => {
  return (
    <div>
      <img src={props.url} />
      <p>{props.name}</p>
    </div>
  );
};

export default FriendsElement;
