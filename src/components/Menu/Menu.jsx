import React from "react";
import { data, images } from "../../constants";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ display: "flex", height: "100%", alignItems: "center" }}
        >
          {" "}
          <img
            src={images.newlogo}
            alt="logo"
            width="50px"
            style={{
              aspectRatio: "1",
              borderRadius: "50%",
              margin: "0 1rem 0 0",
            }}
          />
          <span style={{ fontSize: "25px" }}>SV-World</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {data.Menu.map((item, index) => (
              <Nav.Link href={item.link}>{item.text}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
