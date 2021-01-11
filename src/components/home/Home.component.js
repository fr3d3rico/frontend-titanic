import React from 'react';
import { BrowserRouter, Switch, Route, Link as LinkRouter } from 'react-router-dom';

import Login from '../login/Login.component';
import About from '../about/About.component';
import Users from '../users/Users.component';

import ErrorBoundary from '../../utils/ErrorBoundary';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';

const Home = () => {
    return (
        <BrowserRouter>
            <Container className="p-3">
                <Jumbotron>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Titanic</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkRouter to="/about">About</LinkRouter>
                                <LinkRouter to="/users">Users</LinkRouter>
                                <LinkRouter to="/login">Login</LinkRouter>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" />
                        <Route path="/about" render={() => (<ErrorBoundary key="aboutEB"><About /></ErrorBoundary>)} />
                        <Route path="/login" render={() => (<ErrorBoundary key="loginEB"><Login /></ErrorBoundary>)} />
                        <Route path="/users" render={() => (<ErrorBoundary key="usersEB"><Users /></ErrorBoundary>)} />
                    </Switch>

                </Jumbotron>
            </Container>
        </BrowserRouter>
    )
};

export default Home;