import React from 'react';
import '../Styles/Modules.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Card, Col, Form, Row, Tab, Tabs} from 'react-bootstrap'
import Locations from "../locations.json"
function Contato (props) {
    return (
        <>
            <header>
            <div id='headerDiv'
            className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
            style={{backgroundImage: `url(${props.img})`, width: '100%', height: '680px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
            >
            </div>
            </header>
            <section>
        
               
                <Tabs className='d-flex justify-content-center my-3 px-2'>
                    {Locations && Locations.map((location, index) => {
                        return (
                            <Tab eventKey={location.name} title={location.adress}>
                                <div className='d-flex justify-content-center'>
                                <Card key={index} style={{width: '60rem'}}>
                                    <Card.Img variant='top' src={location.image}/>
                                    <Card.Body>
                                        <Card.Title className='mb-4'>{location.name}</Card.Title>
                                        <Card.Text>{location.description}</Card.Text>
                                    </Card.Body>
                                </Card> 
                                </div>
                            </Tab>
                        )
                    })}
                </Tabs>
               
            </section>

            <section>
                <Container className='mt-5'>
                    <Row className='justify-content-md-center'> 
                        <Col md={6}>
                            <h2 className='text-center mb-3'>Entre em Contato</h2>
                            <Form onSubmit={''}>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Digite seu nome'
                                        name='name'
                                    />
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='email'
                                        placeholder='E-mail'
                                        name='email'
                                    />
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Control
                                            as='textarea'
                                            placeholder='Deixe sua mensagem'
                                            name='message'
                                            rows = {5}
                                        />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mb-3">
                                   Enviar
                                </Button>


                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
export default Contato