import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/reducer/users-reducer";
import Users from "./Users";
import Preloader from "./Preloader";
import { compose } from "@reduxjs/toolkit";

class UsersContainer extends React.Component {
  componentDidMount() {
    // позволяет отправлять запросы к удаленным ресурсам
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize,
      pageNumber
    );
  };

  render() {
    return (
      <>
        <Preloader preloader={this.props.isFetching} />
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          selectedPage={this.props.selectedPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
  };
};


export default compose(
  connect(mapStateToProps, {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers,}),
)(UsersContainer)