import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import PostReduxForm from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));
  let AddNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <PostReduxForm onSubmit={AddNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
