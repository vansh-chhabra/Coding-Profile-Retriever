import React from 'react'
import { Container,Navbar,Nav,NavDropdown } from 'react-bootstrap'
import './Navbar.css'

function NavBar() {
  const signOutHandler = ()=>{
      localStorage.clear() ; 
  }
  var details = JSON.parse(localStorage.getItem('userDetails'));
  return (
    <React.Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand className='navbar-title'>Social Coding</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/dashboard">Home</Nav.Link>
        <NavDropdown title={details.profile.name} id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={signOutHandler} href="/">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </React.Fragment>
  )
}

export default NavBar