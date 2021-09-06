import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-dropdown-select";

export default class CovidReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: [],
      reports: [],
      options: [],
      selectedRegion: "",
      timer: false,
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
    await axios
      .get("https://covid-19-statistics.p.rapidapi.com/reports", header)
      .then((res) => {
        const reports = res.data.data;
        this.setState({ reports: reports });
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

  timerFunction() {
    setTimeout(() => {
      this.getData();
      this.setState({ timer: false });
    }, 5000);
  }

  componentDidUpdate() {
    if (this.state.timer == true) {
      this.timerFunction();
    }
  }

  render() {
    const { region, reports, options, selectedRegion } = this.state;
    const defaultOption = options[0];

    return (
      <div>
        <h1>CovidReports</h1>
        <div>
          <h3>Select Region</h3>
          <Container>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                <Select
                  options={options}
                  onChange={(data, i) => {
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
        <div>
          <br></br>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Province</th>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Last_update</th>
              </tr>
            </thead>

            <tbody>
              {selectedRegion ? (
                reports.map((res, i) =>
                  res.region.iso === selectedRegion ? (
                    <tr>
                      <th>{res.region.name}</th>
                      <th>{res.region.province}</th>
                      <th>{res.date}</th>
                      <th>{res.confirmed}</th>
                      <th>{res.deaths}</th>
                      <th>{res.recovered}</th>
                      <th>{res.active}</th>
                      <th>{res.last_update}</th>
                    </tr>
                  ) : (
                    <div></div>
                  )
                )
              ) : (
                <div></div>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
