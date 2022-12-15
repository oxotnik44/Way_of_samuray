import React from "react";
import s from "./Header.module.css";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/reducer/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div className={s.header}>
        <Header {...this.props} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { logout })(HeaderContainer);
