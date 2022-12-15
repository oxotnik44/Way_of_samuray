import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../FormControls/FormsControls";
import s from "./AddMessagesForm.module.css";
import addMessage from "./../../../assets/img-message/addMessage.png"
import imgLoupe from "./../../../assets/img-message/imgLoupe.png"

const maxLength = maxLengthCreator(100);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.messageFormDiv}>
      <Field
        name={"newMessagesBody"}
        component={Textarea}
        placeholder="Найти диалог"
        validate={[required, maxLength]}
        className={s.postForm}
      />
      <div className={s.imgLoupeDiv}>
        <img src={imgLoupe} className={s.imgLoupe}/>
      </div>
      <button className={s.buttonSendingMessage}><img src={addMessage} className={s.imgSendingMessage}/></button>
    </form>
  );
};

const MessagesReduxForm = reduxForm({
  form: "dialogs-add-message",
})(AddMessageForm);

export default MessagesReduxForm;
