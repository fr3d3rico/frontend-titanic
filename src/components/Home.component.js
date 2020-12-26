import React from 'react';
import { BrowserRouter, Switch, Route, Link as LinkRouter } from 'react-router-dom';

import Login from './Login.component';
import About from './About.component';
import Users from './Users.component';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';


const Home = () => (
    <BrowserRouter>
        <Container className="p-3">
            <Jumbotron>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Titanic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkRouter to="/about">About</LinkRouter>
                            <LinkRouter to="/login">Login</LinkRouter>
                            <LinkRouter to="/users">Users</LinkRouter>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/" exact />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/users" component={Users} />
                </Switch>
            </Jumbotron>
        </Container>
    </BrowserRouter>
);

export default Home;