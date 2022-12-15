import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.postContainer}>
      <div className={s.postUserContainer}>
        <img src="https://peopletalk.ru/wp-content/uploads/2016/08/orig_c1d79d70d005da6723cd3252d27b8eea-1024x640.jpg" />
        <p>Name Surname</p>
      </div>
      <div className={s.post}>
        <div className={s.textPost}>{props.message}</div>
        <div></div>
        <div className={s.imgPost}>
        </div>
      </div>
    </div>
  );
};
export default Post;
