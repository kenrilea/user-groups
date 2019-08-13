import React from "react";

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    return <button onClick={this.props.refreshCallback}>Refresh List</button>;
  };
}
