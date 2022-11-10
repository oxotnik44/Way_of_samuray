import axios from "axios";
import React from "react";

import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/reducer/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
