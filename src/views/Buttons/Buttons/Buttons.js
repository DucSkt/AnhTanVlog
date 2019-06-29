import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import CardText from "reactstrap/es/CardText";

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Block Level Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="2" xl className="mb-2 mb-xl-0">
                <img src={'https://znews-photo.zadn.vn/w860/Uploaded/fsmyy/2018_06_29/1BMWS1000RR2018_Zing.jpg'} style={{height: 100, width:100}} />
                <CardText>
                  aaa
                </CardText>
                <CardText>
                  aaa
                </CardText>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button style={{  width: '60px',
                  background: 'red',
                  height: '60px',
                  borderRadius: '50%',
                 }} block color="primary">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="secondary">Secondary</Button>
              </Col>
            </Row>


          </CardBody>
        </Card>



        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Block Level Buttons</strong>
              </CardHeader>
              <CardBody>
                <p>Add prop <code>block</code></p>
                <Button color="secondary" size="lg" block>Block level button</Button>
                <Button color="primary" size="lg" block>Block level button</Button>
                <Button color="success" size="lg" block>Block level button</Button>
                <Button color="info" size="lg" block>Block level button</Button>
                <Button color="warning" size="lg" block>Block level button</Button>
                <Button color="danger" size="lg" block>Block level button</Button>
                <Button color="link" size="lg" block>Block level button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Block Level Buttons</strong>
              </CardHeader>
              <CardBody>
                <p>Add prop <code>block</code></p>
                <Button outline color="secondary" size="lg" block>Block level button</Button>
                <Button outline color="primary" size="lg" block>Block level button</Button>
                <Button outline color="success" size="lg" block>Block level button</Button>
                <Button outline color="info" size="lg" block>Block level button</Button>
                <Button outline color="warning" size="lg" block>Block level button</Button>
                <Button outline color="danger" size="lg" block>Block level button</Button>
                <Button color="ghost-info" size="lg" block>Block level button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Buttons;
