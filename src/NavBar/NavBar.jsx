import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import './NavBar.css';

class NavBar extends React.Component{
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Alam's Fun Cards</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/quiz">Quiz</Nav.Link>
                    </Nav>
                    
                    <Nav>
                    {/* 
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                      <NavDropdown title="Card Category" id="collasible-nav-dropdown">
                         <NavDropdown.Item href="/card">Fruit</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}





export default NavBar