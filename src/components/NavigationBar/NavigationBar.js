import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/"><h1>Portfolio</h1></Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar