import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Netflix-assets/assets/netflix_logo.png";
import avatar from "../Netflix-assets/assets/avatar.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar expand="lg" className=" navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="netflix-logo" width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/tv-shows" className="nav-link">
                Tv Shows
              </Link>
              <Link className="nav-link">Movies</Link>
              <Link className="nav-link">Recently Added</Link>
              <Link className="nav-link">My List</Link>
            </Nav>
            <Nav className="gap-3">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />

              <Nav.Link>
                <i className="bi bi-search" id="iSearch"></i>
              </Nav.Link>
              <Nav.Link disabled>KIDS</Nav.Link>
              <Nav.Link disabled>
                <i className="bi bi-bell-fill"></i>
              </Nav.Link>
              <NavDropdown
                title={<img src={avatar} alt="avatar-profile" width={25} />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/settings">Settings</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
