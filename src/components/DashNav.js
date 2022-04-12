import { Navbar, Nav, Container, Col} from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './DashNav.css'

const DashNav=({setIndex})=>{

    return (
      <React.Fragment> 
        <div className="dashnav-wrapper">
          <Container expand='sm'>
            <Navbar bg="light" variant="light">
              <Container className="justify-content-center">
                <Nav className="justify-content-center" >
                  <Col><Nav.Link onClick={()=>setIndex(0)}>Overview</Nav.Link></Col>
                  <Col><Nav.Link onClick={()=>setIndex(1)}>GitHub</Nav.Link></Col>
                  <Col><Nav.Link onClick={()=>setIndex(2)}>CodeForces</Nav.Link></Col>
                  <Col><Nav.Link onClick={()=>setIndex(3)}>LeetCode</Nav.Link></Col>
                </Nav>
              </Container>
            </Navbar>
          </Container>
        </div>
      </React.Fragment>
    )
}


export default DashNav;