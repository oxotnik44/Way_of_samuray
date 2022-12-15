import { Form } from "redux-form";
import s from "./FormsControls.module.css";
export const FormControl = ({ input, meta, ...props }) => {
  let hasError = meta.error && meta.touched;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      <div>
        {hasError && <span className={s.formControl}>{meta.error}</span>}
      </div>
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restprops}></input>
    </FormControl>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restprops}></textarea>
    </FormControl>
  );
};
