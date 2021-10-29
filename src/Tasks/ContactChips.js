import React, { Component } from "react";
import "./css/ContactChips.scss";
import { Chip, Avatar } from "@material-ui/core";
import { Button } from "react-bootstrap";
export default class ContactChips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // handleKey(e) {
  //   const keyCode = e.keyCode || e.which;
  //   if (keyCode === 13) {
  //     console.log(`this.state.value`, this.state.value);
  //   }
  // }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  onClick = () => {
    const { value, data } = this.state;
    console.log("this.state.value", value);
    // data.push(value);
    const val = [];
    val.push(value);
    console.log(`value`, value);
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h2>Contact Chip</h2>
        <div className="div-center">
          <h4>Enter Your Contact Name</h4>
          <div>
            <input
              type="text"
              value={value}
              //  onKeyUp={this.handleKey}
              onChange={this.handleChange}
            />
          </div>
          <div className="button-ui">
            <Button onClick={this.onClick}>Select Contact </Button>
          </div>
          <div>
            {/* <Chip
              variant="outlined"
              color="primary"
              label="Vijay"
              onDelete={this.handleDelete}
              avatar={<Avatar src="/static/images/avatar/1.jpg" />}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
