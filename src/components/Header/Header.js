import React from 'react';
import logo from '../../logo2.png'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} alt="logo" className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <button type="button" class="btn btn-light cartbtn"><FiShoppingCart /></button>
                            <Link to="/login">

                                <button type="button" class="btn btn-light">Loge In</button>

                            </Link>
                            <button type="button" className="btn btn-danger signup">Sign Up</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;