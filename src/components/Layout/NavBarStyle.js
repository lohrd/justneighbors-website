import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import HomeImage from '../../images/testJNHOME.png'
import AboutImage from '../../images/testJNABOUT.png'
import ContactImage from '../../images/testJNCHAT.png'

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .nav-link {
        float: left;
        text-align: center;
    }
    .navbar-brand, .navbar-nav{


        &:hover {
            color: white;
        }
    }
`;

const NavigationBar = () => {
    return (
              <Router>
                <MDBNavbar color="grey" dark expand="md">
                  <MDBNavbarBrand className="white-text">
                    <MDBNavLink to="/">Just Neighbors</MDBNavLink>
                    {/* <strong className="white-text">Just Neighbors</strong> */}
                  </MDBNavbarBrand>
                  <MDBNavbarToggler/>
                  <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBNavLink to="/">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/about">About</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/contact">Contact</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBNavbar>
                <Switch>
                <Route exact path="/">
                    <Home homeImage={HomeImage}></Home>
                </Route>
                <Route path="/about">
                    <About aboutImage={AboutImage}></About>
                </Route>
                <Route path="/contact">
                    <Contact contactImage={ContactImage}></Contact>
                </Route>
            </Switch>
              </Router>
              );
            }
          
          
export default NavigationBar;




{/* <Router>
<Styles>
<Navbar  bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="/">Just Neighbors</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-anv"></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="ml-auto">
            <Nav.Item><Nav.Link to="#">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link to="#about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link to="#contact">Contact</Nav.Link></Nav.Item>
        </Nav>
</Navbar>
</Styles>
</Router> */}
