import React from 'react';
import '../Styles/Contato.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Card, Col, Form, Row, Tab, Tabs} from 'react-bootstrap'
import { FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import Locations from "../locations.json"
function Contato (props) {
    return (
        <>
            <header>
            <div id='headerDiv'
            className="p-5 text-center bg-image d-flex flex-column justify-content-between align-items-center"
            style={{backgroundImage: `url(${props.img})`, width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
            >
                <div>
                <h1 className='mask text-light' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', marginBottom:'3rem', padding:'0.2rem 2rem',  borderRadius:'5px'}}>Reserve Conosco</h1>
                <Button className='mask' variant='dark' size='lg' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>Contatos</Button>
                </div>
                <h2 className='mask text-light' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding:'0.2rem 2rem', borderRadius:'5px',  marginBottom:'1rem'}}>Estamos Esperando seu contato <FaPhone /></h2>
            </div>
            </header>
            <main>
            <section style={{margin: '3rem 25rem', backgroundColor:'#fff', borderRadius: '7px'}}>
        
               <h1 className='text-center text-secondary' style={{marginBottom:'2rem', paddingTop:'3rem', paddingRight:'3rem'}}><MdPlace /> Nossas Sedes</h1>
                <Tabs id='locations' className='d-flex justify-content-center my-3 px-2'>
                    {Locations && Locations.map((location, index) => {
                        return (
                            <Tab eventKey={location.name} title={location.adress} style={{color:'#000'}}>
                                <div className='d-flex justify-content-center'>
                                <Card key={index} style={{width: '60rem', border: 'none'}}>
                                    <Card.Img variant='top' src={location.image} style={{borderRadius:'7px'}}/>
                                    <Card.Body>
                                        <Card.Title className='mb-4'>{location.name}</Card.Title>
                                        <Card.Text style={{paddingBottom:'2rem'}}>{location.description}</Card.Text>
                                    </Card.Body>
                                </Card> 
                                </div>
                            </Tab>
                        )
                    })}
                </Tabs>
               
            </section>

            <section style={{margin: '6rem 25rem', backgroundColor:'#fff', borderRadius: '7px', padding: '3rem'}}>
                <Container className='mt-5'>
                    <Row className='justify-content-md-center'> 
                        <Col md={6}>
                            <h1 className='text-center mb-3 text-secondary'>Entre em Contato</h1>
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

                                <Button variant="secondary" type="submit" className="mb-3">
                                   Enviar
                                </Button>


                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            </main>

        </>
    )
}
export default Contato