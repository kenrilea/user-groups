import React from "react";

import GroupListElem from "./GroupListElem.jsx";

import RefreshButton from "./primitive/RefreshButton.jsx";

import GetGroupList from "../helpers/fetches/GetGroupList.js";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { groupList: [] };
  }
  componentDidMount = () => {
    this.updateGroupList();
  };
  updateGroupList = () => {
    GetGroupList().then(res => {
      if (res.success === true) {
        this.setState({ groupList: res.data.groupList });
      }
    });
  };
  renderGroupList = () => {
    let groupListHTML = [];
    this.state.groupList.forEach(group => {
      groupListHTML.push(
        <GroupListElem groupname={group.name} memberList={group.memberList} />
      );
    });
    return groupListHTML;
  };
  render = () => {
    return (
      <div className={"container_outer"}>
        <h3>All Groups</h3>
        <RefreshButton refreshCallback={this.updateGroupList} />
        <ul>{this.renderGroupList()}</ul>
      </div>
    );
  };
}
