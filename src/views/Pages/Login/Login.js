import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import  './login.scss';
import Anh from '../aa.jpg'

class Login extends Component {
  render() {
    return (
      <div className="session">
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1 className="text">Login</h1>
                      <p className="text">Vous pouvez vous connecter en utilisant votre email</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col md="6">
                          <Button color="primary" size="lg" block onClick={()=> {this.props.history.push('/dashboard')}} >Login</Button>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col className="text-left">
                          <Button color="link" className="px-0">Lost your username or password?</Button>
                        </Col>
                        <Col className="text-right">
                          <Button color="link" className="px-0">Don't have an account</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    );
  }
}

export default Login;
