import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Main.Modules.css'
import { Container, Carousel, Card, Col, Image, Row } from 'react-bootstrap'
import Testimonials from '../testimonials.json'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


function Main() {
  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1596473536056-91eadf31189e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1515496281361-241a540151a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>

      <section className="py-5 draggable my-5">
        <h1 className='text-center mb-4'>Nossos Resultados</h1>
        <Container>
          <Row className='justify-content-center text-center px-3 my-4'>

            <Col md="3">
              <h2 className="text-gradient text-primary">80%</h2>
              <h5 className='mt-3'>de Satisfação dos clientes</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>

            <Col md="3">
              <h2 className="text-gradient text-primary">30M+</h2> 
              <h5 className='mt-3'>Visitas por ano</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>

            <Col md="3">
              <h2 className="text-gradient text-primary">10+</h2>
              <h5 className='mt-3'>anos de Mercado</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>

          </Row>
        </Container>
      </section>

      <section id='testemonials' className='d-flex justify-content-around m-5'>
        
        <Container className='py-2'>
          <Row>
            <h1 className='text-center mb-4'>Depoimentos</h1>
          </Row>

          <Row className='my-3 px-2'>
            {Testimonials && Testimonials.map((c, index) => {
                return (
                  <Card key={index} style={{width: '20rem', border: 'none'}}>
                        <Container> 
                        <Image src={c.img} roundedCircle fluid className="card-img-top m-4" style={{width: '10rem', height: '10rem'}}/>
                        </Container>
                        <Card.Body>
                            <Card.Title className='mb-4'>{c.author}</Card.Title>
                            <Card.Text><FaQuoteLeft className='mx-2' />{c.content}<FaQuoteRight className='mx-2' /></Card.Text>
                        </Card.Body>
                  </Card> 
                )
            })}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Main;
