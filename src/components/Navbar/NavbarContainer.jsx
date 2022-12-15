import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import getAuthUserData from "./../../redux/reducer/auth-reducer";

class NavbarContainer extends React.Component {
  componentDidMount() {
  }
  render() {
    return <Navbar userId={this.props.userId} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { getAuthUserData })(NavbarContainer);
