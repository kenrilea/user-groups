import React from "react";

import InputText from "./primitive/inputText.jsx";
import InputSubmit from "./primitive/InputSubmit.jsx";

import PostCreateUser from "../helpers/fetches/PostCreateUser.js";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  onChangeUsername = value => {
    this.setState({ username: value });
  };
  submitCreateUser = event => {
    event.preventDefault();
    console.log("submitted login");
    console.log(this.state.username);
    PostCreateUser(this.state.username).then(res => {
      console.log(res);
    });
  };
  render = () => {
    return (
      <div className={"container_outer"}>
        <h3>Create User</h3>
        <form onSubmit={this.submitCreateUser}>
          <InputText onChangeCallback={this.onChangeUsername} />
          <InputSubmit buttontext={"Create User"} />
        </form>
      </div>
    );
  };
}
