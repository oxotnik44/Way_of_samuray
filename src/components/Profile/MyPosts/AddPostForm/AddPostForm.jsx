import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { Textarea } from "../../../FormControls/FormsControls";
import s from "./AddPostForm.module.css";
import createPost from "./../../../../assets/img-posts/createPost.png";
const maxLength = maxLengthCreator(150);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.postFormDiv}>
      <Field
        name={"newPostText"}
        component={Textarea}
        placeholder={"Введите сообщение"}
        validate={[required, maxLength]}
        className={s.postForm}
      />
      <button className={s.buttonSendingPost}>
        <img src={createPost} className={s.imgSendingPost} />
      </button>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "profile-add-post",
})(PostForm);

export default PostReduxForm;
