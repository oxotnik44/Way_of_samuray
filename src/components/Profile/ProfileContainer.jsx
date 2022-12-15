import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/reducer/profile-reducer";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "@reduxjs/toolkit";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    login: state.profilePage.login,
    auth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileContainer);
