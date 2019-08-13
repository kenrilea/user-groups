import React from "react";

export default class InputSubmit extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <input
        className={"input_submit"}
        type={"submit"}
        value={this.props.buttontext}
      />
    );
  };
}
