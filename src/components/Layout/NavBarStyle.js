import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

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
            <Styles>
            <Navbar  bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">Just Neighbors</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-anv"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="#">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
                    </Nav>
            </Navbar>
            </Styles>
        </Router>
    )

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
