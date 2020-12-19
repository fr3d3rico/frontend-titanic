import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

import LoginApi from '../services/LoginApi.service';



const Login = () => {

    const [usuario, setUsuario] = useState();

    const handleInputChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    const loginHandler = (event) => {
        event.preventDefault();
        LoginApi(usuario);
    }

    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicUsuario">
                            <Form.Label>
                                Usuário
                            </Form.Label>
                            <Form.Control type="text" placeholder="Informe seu Usuário" name="usuario" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicSenha">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Informe sua Senha" name="senha" onChange={handleInputChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={loginHandler}>
                            Entrar
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container >
    );
}

export default Login;