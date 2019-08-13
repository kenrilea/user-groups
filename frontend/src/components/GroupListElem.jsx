import React from "react";

import InputText from "./primitive/inputText.jsx";
import InputSubmit from "./primitive/InputSubmit.jsx";
import UserListElem from "./UserListElem.jsx";

import PutGroup from "../helpers/fetches/PutGroup.js";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newMember: "" };
  }
  onChangeNewMember = value => {
    this.setState({ newMember: value });
  };
  submitNewMember = event => {
    event.preventDefault();
    console.log(this.state.newMember);
    PutGroup(this.props.groupname, "add", this.state.newMember).then(res => {
      console.log(res);
    });
  };
  removeMember = member => {
    PutGroup(this.props.groupname, "remove", member).then(res => {
      console.log(res);
    });
  };
  renderMembers = () => {
    let memberHTML = [];
    this.props.memberList.forEach((member, index) => {
      memberHTML.push(
        <UserListElem user={member} onClickCallback={this.removeMember} />
      );
    });
    return memberHTML;
  };
  render = () => {
    return (
      <div className={"container_medium"}>
        <h3>{this.props.groupname}</h3>
        <form onSubmit={this.submitNewMember}>
          <InputText onChangeCallback={this.onChangeNewMember} />
          <InputSubmit buttontext={"Add User To Group"} />
        </form>
        <ul>{this.renderMembers()}</ul>
      </div>
    );
  };
}
