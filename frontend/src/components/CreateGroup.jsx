import React from "react";

import InputText from "./primitive/inputText.jsx";
import InputSubmit from "./primitive/InputSubmit.jsx";

import PostCreateGroup from "../helpers/fetches/PostCreateGroup.js";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { groupname: "", firstMember: "" };
  }
  onChangeGroup = value => {
    this.setState({ groupname: value });
  };
  submitCreateGroup = event => {
    event.preventDefault();
    console.log("submitted create group");
    console.log(this.state.groupname);
    PostCreateGroup(this.state.groupname, this.state.firstMember).then(res => {
      console.log(res);
    });
  };
  onChangeFirstMember = value => {
    this.setState({ firstMember: value });
  };
  render = () => {
    return (
      <div className={"container_outer"}>
        <h3>Create Group</h3>
        <form onSubmit={this.submitCreateGroup}>
          <InputText onChangeCallback={this.onChangeGroup} />
          <InputText onChangeCallback={this.onChangeFirstMember} />
          <InputSubmit buttontext={"Create Group"} />
        </form>
      </div>
    );
  };
}
