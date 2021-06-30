import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Testfunction from "../test/test";
import TestSidebar from "../../../components/testSidebar/testsidebar";
import LeadsSidebar from "../../../components/Sidebar/LeadsSidebar"
export default function TestScreen(props) {

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col
            id="sidebar-component"
            className="shadow"
            lg={2}
            md={2}
            sm={0}
            xs={0}
            style={{ backgroundColor: "white" }}
          >
            <TestSidebar/>
          </Col>
          <Col
            lg={10}
            md={10}
            sm={12}
            xs={12}
            style={{ backgroundColor: "#FAFAFA" }}
          >
            <Testfunction />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
