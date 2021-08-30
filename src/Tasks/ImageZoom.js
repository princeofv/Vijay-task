import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../App.css";
export default class ImageZoom extends Component {
  render() {
    return (
      <Container>
        <div class="article-container">
          <div class="article-img-holder"></div>
          <p class="article-title-link">Music that will wake you up on your way to work</p>
        </div>
      </Container>
    );
  }
}
