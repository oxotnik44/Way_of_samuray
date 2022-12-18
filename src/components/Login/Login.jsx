import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../FormControls/FormsControls";
import { login } from "./../../redux/reducer/auth-reducer";
import s from "./../FormControls/FormsControls.module.css";
import style from "./Login.module.css";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          component={Input}
          placeholder={"Email"}
          validate={[required]}
          className={style.loginInput}
        />
      </div>
      <div>
        <Field
          name={"password"}
          component={Input}
          placeholder={"Password"}
          validate={[required]}
          type={"password"}
          className={style.loginInput}
        />
      </div>
      <div className={style.rememberMeBlock}>
        <Field
          name={"rememberMe"}
          component={Input}
          type={"checkbox"}
          className={style.rememberMe}
        />
        <div className={style.rememberMeText}>REMEMBER ME</div>
      </div>
      {props.error && <div className={s.formError}>{props.error}</div>}
      <div>
        <button className={style.authButton}>LOG IN</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={`/profile/${props.userId}`} />;
  } else {
    return (
      <div className={style.loginForm}>
        <div className={style.appName}>APP NAME</div>
        <div className={style.imgLogo}></div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { login })(Login);
