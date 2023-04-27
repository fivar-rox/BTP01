import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../main.css'; 
export default function Header() {

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Fairness In Clustering</Navbar.Brand>
          <Nav className="me-auto ">
            <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            <NavLink to="/demo" activeClassName="active" className="nav-link">Demo</NavLink>
            <NavLink to="/apidocs" activeClassName="active" className="nav-link">APIdocs</NavLink>
            <NavLink to="https://github.com/shreya28302/BTP" activeClassName="active" className="nav-link" target="_blank">Github</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
