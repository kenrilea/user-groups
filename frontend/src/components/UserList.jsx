import React from "react";

import UserListElem from "./UserListElem.jsx";

import RefreshButton from "./primitive/RefreshButton.jsx";

import DeleteUser from "../helpers/fetches/DeleteUser.js";
import GetUserList from "../helpers/fetches/GetUserList.js";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userList: [] };
  }
  componentDidMount = () => {
    this.updateUserList();
  };
  updateUserList = () => {
    GetUserList().then(res => {
      if (res.success === true) {
        console.log(res.data.userList);
        this.setState({ userList: res.data.userList });
      }
    });
  };
  removeUser = userToRemove => {
    DeleteUser(userToRemove).then(res => {
      console.log(res);
    });
  };
  renderUsers = () => {
    let userListHTML = [];
    this.state.userList.forEach(user => {
      userListHTML.push(
        <UserListElem user={user.username} onClickCallback={this.removeUser} />
      );
    });
    return userListHTML;
  };
  render = () => {
    return (
      <div className={"container_outer"}>
        <h3>All users</h3>
        <RefreshButton refreshCallback={this.updateUserList} />
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  };
}
