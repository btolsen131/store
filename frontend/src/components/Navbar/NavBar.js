import React from 'react'
import {BsCart3, BsPeople} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container,  Nav } from 'react-bootstrap'
import { NavLink } from './NavBarElements'

const NavBar = () => {
  return (
<Navbar bg="secondary" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand href="/">Brian's Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Shop">Shop</NavLink>
        <NavLink to="/Cart"><BsCart3/>Cart</NavLink>
        {/* <NavLink to='#'><BsPeople/>Login</NavLink> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar