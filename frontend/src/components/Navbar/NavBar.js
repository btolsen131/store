import React from 'react'
import {BsCart3, BsPeople} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container,  Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from './NavBarElements'
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../actions/userActions'

const NavBar = () => {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()

  // Event handler to dispatch logout action
  const logoutHandler = () => {
    dispatch(logout())
  }

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
        {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
            <NavLink to='#'>Profile</NavLink>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ):(
          <NavLink to='/Login'><BsPeople/>Login</NavLink>
        )}
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar