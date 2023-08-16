import React, { useState } from 'react';
import {Container, Row,Col, Button, Form } from 'react-bootstrap';

import { useLocalState } from '../util/UseLocalStorage';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [jwt, setJwt] = useLocalState("","jwt");

    function sendLoginRequest() {
            const reqBody = {
                username : username,
                password : password
            }
        
            fetch('api/auth/login', {
                headers : {
                "Content-Type" : "application/json" 
                },
                method : "post",
                body : JSON.stringify(reqBody),
            })
            .then((response) => {
                if(response.status === 200)
                    return Promise.all( [response.json(), response.headers]);
                else
                    return Promise.reject("Invalid login attempt")
            })
            .then(([body, headers]) => {
                setJwt(headers.get("Authorization"));
                window.location.href = "dashboard";
            })
            .catch((message) => {
                alert(message);
            });
        } 

    return (
        <>
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md="8" lg="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder='lutendo@gmail.com' value={username} onChange={(event) => setUsername(event.target.value)} />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="8" lg="6">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Enter your password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </Form.Group>
                </Col>
            </Row>


            <Row className="justify-content-center">
                <Col md="8" lg="6" className="mt-2 d-flex flex-column gap-2 flex-md-row justify-content-md-between">
                    <Button id="submit" type="button" size="lg" onClick={() =>  sendLoginRequest()}>
                        Login
                    </Button>
                    <Button variant="secondary" id="submit" type="button" size="lg" onClick={() =>  {window.location.href = "/";}}>
                        Exit
                    </Button>
                </Col>
            </Row>
        </Container>

        </>
    );
};

export default Login;