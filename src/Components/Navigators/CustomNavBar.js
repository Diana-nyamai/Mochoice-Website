import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';

 class CustomNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
    <Navbar.Brand href="/"><img src="./logo1.png" alt="logo" width="70" height="70"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"><b>Home</b> <MDBIcon icon="home"/></Nav.Link>
      <NavDropdown title="Shop" >
        <NavDropdown.Item href="/Bags">Bags</NavDropdown.Item>
        <NavDropdown.Item href="/Shoes">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="/Watches" to="/Watches">Watches</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Clothes" >
        <NavDropdown.Item href="/Dress">Dresses</NavDropdown.Item>
        <NavDropdown.Item href="/Skirt">Skirt</NavDropdown.Item>
        <NavDropdown.Item href="/Trouser">Trousers</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button  variant="outline-info">Search</Button>
    </Form> </Navbar.Collapse>
  </Navbar>
 
      </div>
    )
  }
}

export default CustomNavBar
