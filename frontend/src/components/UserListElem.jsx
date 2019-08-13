import React from "react";

import InputText from "./primitive/inputText.jsx";
import InputSubmit from "./primitive/InputSubmit.jsx";

import PutGroup from "../helpers/fetches/PutGroup.js";

export default class UserListElem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnclick = () => {
    this.props.onClickCallback(this.props.user);
  };
  render = () => {
    return (
      <div className={"container_inner"}>
        <p>{this.props.user}</p>
        <button onClick={this.handleOnclick}>Remove</button>
      </div>
    );
  };
}
