import React from "react";
import weddinglogo from "../../Assets/weddinglogo.PNG";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function Navbar2() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="#">
        <img
          src={weddinglogo}
          width="200"
          height="100"
          className="d-inline-block align-top"
          alt="Wedding logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#couple">Couple</Nav.Link>
          <Nav.Link href="#story">Story</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#family">Family</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#reservation">RSVP</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
