import React, { useRef } from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message}  like={p.like} />
  ));
  let onAddPost = () => {
    props.addPost()
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text)
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea  onChange={onPostChange} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add posts</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;