import React, {Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';
 

class NavBar extends Component{
    constructor(props){
        super(props);
         this.state = {
            categories: props.categories ? props.categories : []
        }
        console.log('props in navbar :::: ', props.categories)
     }

    componentDidMount() {
        fetch('https://learning-card-api.herokuapp.com/categories')
        .then(res => res.json())
        .then((data) => {
          console.log("update categories", data)
         this.setState({categories:data})   
    })
        .catch(console.log)
    }
 
    render() {
        return (
            <Navbar className="main-nav-bar" collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
                <Navbar.Brand href="/">Alam's Fun Cards</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/quiz">Quiz</Nav.Link> */}
                        <NavDropdown title="Quiz" id="collasible-nav-dropdown">
                         <LinkContainer key="en" to={{
                                     pathname: "/quiz/language/en"}}>
                                 <NavDropdown.Item>English 🇬🇧</NavDropdown.Item>
                         </LinkContainer>
                         <LinkContainer key="de" to={{
                                     pathname: "/quiz/language/de"}}>
                                 <NavDropdown.Item>Deutsch 🇩🇪</NavDropdown.Item>
                         </LinkContainer>
                         <LinkContainer key="zh-hk" to={{
                                     pathname: "/quiz/language/zh-hk"}}>
                                 <NavDropdown.Item>中文 🇭🇰</NavDropdown.Item>
                         </LinkContainer> 
                 
                         </NavDropdown>
                    </Nav>
                    
                    <Nav>
                     
                      <NavDropdown title="Card Category" id="collasible-nav-dropdown">
                     
                         {this.state.categories.map((each, index) => (
                             <LinkContainer key={each.category} to={{
                                pathname: "/cards/category/"+each.category, 
                                param1: each.category
                                }} >
                             <NavDropdown.Item>{each.category}</NavDropdown.Item>
                            
                             </LinkContainer>
                         ))} 
                     
                      </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar