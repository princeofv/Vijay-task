import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../App.css";
export default class ImageZoom extends Component {
  render() {
    return (
      <Container>
        <div className="article-container">
          <div className="article-img-holder"></div>
          <p className="article-title-link">Music that will wake you up on your way to work</p>
        </div>
      </Container>
    );
  }
}
