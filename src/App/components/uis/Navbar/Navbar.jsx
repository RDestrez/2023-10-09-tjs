import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import {Nav, Container, Navbar as NavBar} from 'react-bootstrap'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {LinkContainer} from 'react-router-bootstrap';

const Navbar = (props) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to={"/home"}><NavBar.Brand>Home</NavBar.Brand></LinkContainer>
       
          <Nav className="me-auto">
          <LinkContainer to={"/home"}><NavBar.Brand>Home</NavBar.Brand></LinkContainer>
          <LinkContainer to={"/editor"}><NavBar.Brand>New</NavBar.Brand></LinkContainer>
          <LinkContainer to={"/editor/2"}><NavBar.Brand>Editor 2</NavBar.Brand></LinkContainer>
          <LinkContainer to={"/thumbnail"}><NavBar.Brand>Thumbnail</NavBar.Brand></LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
