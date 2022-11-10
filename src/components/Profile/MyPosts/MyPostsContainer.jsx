import React from "react"; 
import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
} from "../../../redux/reducer/profile-reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return { 
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText,
  addPost,})(MyPosts);
export default MyPostsContainer;