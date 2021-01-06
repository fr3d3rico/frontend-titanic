import React, { useState } from 'react';
import { Alert, Col, Container, Row, Form, Button } from 'react-bootstrap';

import LoginApi from '../../services/LoginApi.service';
import loginValidation from './Login.validation';

const Login = () => {

    const [usuario, setUsuario] = useState();
    const [msgValidacao, setMsgValidacao] = useState();

    const handleInputChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
        setMsgValidacao(undefined);
    }

    const loginHandler = async (event) => {
        event.preventDefault();

        const { error } = await loginValidation(usuario);

        if (error) {
            //Implementar
            await setMsgValidacao(error);
        }
        else {
            LoginApi(usuario);
        }
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
                        {msgValidacao !== undefined ?
                            <Alert variant='warning'>{msgValidacao.message}</Alert>
                            : ''
                        }
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container >
    );
}

export default Login;