import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import CovidReports from "./Tasks/CovidReports";
import ImageZoom from "./Tasks/ImageZoom";
import FindString from "./Tasks/FindString";
import ContactChips from "./Tasks/ContactChips";
import ReactLightbox from "./Tasks/LightBox";
export default function TabIndex() {
  return (
    <div>
      <Tabs defaultActiveKey="Task-1" id="uncontrolled-tab-example">
        <Tab eventKey="Task-1" title="Task-1">
          <CovidReports />
        </Tab>
        <Tab eventKey="Task-2" title="Task-2">
          <ImageZoom />
        </Tab>
        <Tab eventKey="Task-3" title="Task-3">
          <FindString />
        </Tab>

        <Tab eventKey="Task-4" title="Contact chips">
          <ContactChips />
        </Tab>
        <Tab eventKey="Task-5" title="Image Lightbox">
          <ReactLightbox />
        </Tab>
      </Tabs>
    </div>
  );
}
