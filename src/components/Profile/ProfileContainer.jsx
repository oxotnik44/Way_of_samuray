import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/reducer/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
