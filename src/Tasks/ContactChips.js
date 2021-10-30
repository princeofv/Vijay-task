import React, { Component } from "react";
import "./css/ContactChips.scss";
import { Chip, Avatar } from "@material-ui/core";
import { Button, Container, Row, Col } from "react-bootstrap";
import Select from "react-dropdown-select";
import axios from "axios";
export default class ContactChips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: [],
      region: [],
      reports: [],
      options: [],
    };
  }

  async getData() {
    const header = {
      headers: {
        "x-rapidapi-key": `b2b4545d72mshc4bf734d6f5b0eep10ccaajsnd62f344e9fee`,
      },
    };
    // setInterval(async () => {}, 5000);
    await axios
      .get("https://covid-19-statistics.p.rapidapi.com/regions", header)
      .then((res) => {
        const region1 = res.data.data;
        const region = region1.sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({ region: region });
        const options = region.map((v, i) => ({
          value: v.iso,
          label: v.name,
        }));
        this.setState({ options: options });
        this.setState({ timer: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async componentDidMount() {
    try {
      this.getData();
    } catch (err) {
      console.log(`err`, err);
    }
  }

  render() {
    const { value, reports, options, selectedRegion } = this.state;
    return (
      <div>
        <h2>Select Country </h2>

        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <Select
                multi
                loading
                options={options}
                onChange={(data, i) => {
                  console.log(`data`, data);
                  if (data[0]) {
                    this.setState({ selectedRegion: data[0].value });
                  }
                }}
                placeholder="Select Your Region"
              />
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
