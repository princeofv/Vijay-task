import React, { Component } from "react";

export default class ContactChips extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleKey(e) {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      console.log(`this.state.value`, e.keyCode);
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const myStyle = {};
    return (
      <div style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div>
          <span>My Prompt: </span>
          <input type="text" value={this.state.value} onKeyUp={this.handleKey} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
