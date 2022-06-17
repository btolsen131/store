import React from 'react'
import {BsCart3, BsPeople} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container,  Nav } from 'react-bootstrap'
import { NavLink } from './NavBarElements'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
<Navbar bg="secondary" variant='dark' expand="lg">
  <Container>
    <LinkContainer to='/'>
        <Navbar.Brand>Brian's Shop</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Shop">Shop</NavLink>
        <NavLink to="/Cart"><BsCart3/>Cart</NavLink>
        <NavLink to='/Login'><BsPeople/>Login</NavLink> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar