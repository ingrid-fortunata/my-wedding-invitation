import React from "react";
import weddinglogo from "../../Assets/weddinglogo.PNG";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { animateScroll as scroll, scroller } from "react-scroll";

export default function Navbar2() {
  // const toogleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="#home">
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#couple">Couple</Nav.Link>
          <Nav.Link href="#story">Story</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#family">Family</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#rsvp">RSVP</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
