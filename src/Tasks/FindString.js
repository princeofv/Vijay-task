import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Chip } from "@material-ui/core";
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
  substringChecker(s) {
    let longestSub = "",
      length = 0,
      start = 0,
      prev = s[0];
    for (var i = 1; i <= s.length; ++i) {
      if (i == s.length || s[i] < prev) {
        if (length < i - start) {
          longestSub = s.substring(start, i);
          length = i - start;
        }
        start = i;
      }
      prev = s[i];
    }

    return longestSub;
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
              {" "}
              {/* <Button variant="primary" onClick={() => this.findOutput(array)}>
                Find Output
              </Button> */}{" "}
              <Button
                variant="primary"
                onClick={() => {
                  const d1 = [];
                  this.setState({ array: d1, value: d1, output: d1 });
                }}
              >
                Reset
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Output : {output ? output : <div></div>}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Your Input"
                onChange={(v, i) => {
                  this.setState({ value: v.target.value });
                }}
              />
              <br></br>
              <div>
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
              </div>
            </Col>

            <Col>
              {/* {array
                   && array != "" ? array.map((res) => <Card.Text>{res}</Card.Text>) : <div></div>} */}
              {array && array != "" ? array.map((res) => <Chip label={res} icon={<DoneIcon />} />) : <div></div>}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
