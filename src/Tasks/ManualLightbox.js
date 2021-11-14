import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ImageLightBox from "./Lightbox/ImageLightBox";
export default class ManualLightbox extends Component {
  render() {
    return (
      <div>
        <Tabs efaultActiveKey="Image">
          <Tab eventKey="Image" title="Image">
            <ImageLightBox />
          </Tab>
          <Tab eventKey="Video" title="Video">
            <ImageLightBox />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
