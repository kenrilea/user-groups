import React from "react";

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textInput: "" };
  }
  handleTextInput = event => {
    this.props.onChangeCallback(event.target.value);
    this.setState({ textInput: event.target.value });
  };

  render = () => {
    return (
      <input
        className={"input_text"}
        type={"text"}
        onChange={this.handleTextInput}
        value={this.state.textInput}
        placeholder={this.props.placeholder}
      />
    );
  };
}
