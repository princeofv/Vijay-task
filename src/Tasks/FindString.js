import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Chip, Grid, TextField } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

export default class FindString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      array: [],
      output: "",
    };
  }
  substringChecker(str) {
    var data = [];
    var result = 0;
    var n = str.length;
    for (var i = 0; i < n - 1; i++) {
      if (String.fromCharCode(str[i].charCodeAt(0) + 1) == str[i + 1]) {
        data.push(` ${str[i]}`);
        result++;
        while (String.fromCharCode(str[i].charCodeAt(0) + 1) === str[i + 1]) {
          data.push(str[i + 1]);
          i++;
        }
      }
    }

    return data.join("");
  }
  findOutput(array) {
    const data = [];

    array.map((res) => {
      const subString = this.substringChecker(res);
      data.push(subString);
    });

    data.sort(function (a, b) {
      return b.length - a.length;
    });

    this.setState({ output: data[0] });
  }
  render() {
    const { value, array, output } = this.state;

    return (
      <Container>
        <div style={{ marginTop: "5%" }}>
          <Row>
            <Col>
              <h1>Find the Substrings in alphabetic order</h1>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                // id="standard-full-width"
                // label="Enter Your Input"
                style={{ margin: 8 }}
                type="text"
                placeholder="Enter Your Input"
                fullWidth
                variant="outlined"
                margin="normal"
                value={value}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(v, i) => {
                  this.setState({ value: v.target.value });
                }}
              />
              {/* <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Your Input"
                onChange={(v, i) => {
                  this.setState({ value: v.target.value });
                }}
              /> */}
              <br></br>
              <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <Button
                  variant="primary"
                  onClick={() => {
                    if (array) {
                      const data = array.push(value);
                      this.setState({ array: array });
                      this.findOutput(array);
                    } else {
                      this.setState({ array: value });
                      this.findOutput(array);
                    }
                  }}
                >
                  Add Items
                </Button>

                <Button
                  variant="primary"
                  onClick={() => {
                    const d1 = [];
                    this.setState({ array: d1, value: d1, output: d1 });
                  }}
                >
                  Reset
                </Button>
              </Grid>
            </Col>

            <Col>
              {/* {array
                   && array != "" ? array.map((res) => <Card.Text>{res}</Card.Text>) : <div></div>} */}
              {array && array != "" ? (
                array.map((res, i) => <Chip key={i} label={res} icon={<DoneIcon />} />)
              ) : (
                <div></div>
              )}
              <h1>Output : {output ? output : <div></div>}</h1>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    );
  }
}
