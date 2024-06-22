import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css' // estilos empregados
import '../Styles/Main.css'

import { Container, Carousel, Card, Col, Image, Row } from 'react-bootstrap' //import de funções do react bootstrap

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; //react icons utilizados
import { GrPrevious, GrNext } from "react-icons/gr";

import Testimonials from '../testimonials.json' //json com os depoimentos

//título e texto do carrossel:
const captionTitle = "Esquiar é nossa especialidade"
const captionText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aut vero quos sunt voluptas dolor veritatis sapiente sed modi odio, rem deleniti culpa ipsum autem magnam quo. Possimus, sapiente alias!"

function Main() {
  return (

    <main className='m-0'> 

      <section className='my-carousel' /*seção do carrossel*/ >
        
        <Carousel style={{borderRadius: '7px', overflow: 'hidden'}}
          interval={2000} 
          prevIcon = {<GrPrevious style={{width: '50px', height:'50px', color: '#e3f2fd'}}/>} //ícones dos botões voltar e próxima imagem 
          nextIcon = {<GrNext style={{width: '50px', height:'50px', color: '#e3f2fd'}}/>} 
        >

          <Carousel.Item // cada carousel.item representa uma imagem do carrossel
          >

            <Carousel.Caption className='mask' //forma de exibição do texto e título do carrossel
              style={{height:'200px',backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: '50%', left: '50%', 
                transform: 'translate(-50%, 40%)', padding: '10px', borderRadius:'5px'}}
            >

              <br />

              <h3>{captionTitle}</h3>

              <br />

              <p>{captionText}</p>

            </Carousel.Caption>

            <img // imagem do carrossel
              className="d-block w-100" 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=
              crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="First slide"
            />

          </Carousel.Item>

          <Carousel.Item>

            <Carousel.Caption className='mask' 
              style={{height:'200px',backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: '50%', left: '50%', 
                transform: 'translate(-50%, 40%)', padding: '10px', borderRadius:'5px'}}
            >

              <br />

              <h3>{captionTitle}</h3>

              <br />

              <p>{captionText}</p>

            </Carousel.Caption>

            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1596473536056-91eadf31189e?q=80&w=2070&auto=format&fit=
              crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Second slide"
            />

          </Carousel.Item>

          <Carousel.Item>

            <Carousel.Caption className='mask' 
              style={{height:'200px',backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: '50%', left: '50%', 
                transform: 'translate(-50%, 40%)', padding: '10px', borderRadius:'5px'}}
            >

              <br />

              <h3>{captionTitle}</h3>

              <br />

              <p>{captionText}</p>

            </Carousel.Caption>

            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1515496281361-241a540151a5?q=80&w=2071&auto=format&fit=
              crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Third slide"
            />

          </Carousel.Item>

          <Carousel.Item>

            <Carousel.Caption className='mask' 
              style={{height:'200px',backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: '50%', left: '50%', 
                transform: 'translate(-50%, 40%)', padding: '10px', borderRadius:'5px'}}
            >

              <br />

              <h3>{captionTitle}</h3>

              <br />

              <p>{captionText}</p>

            </Carousel.Caption>

            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=2070&auto=format&fit=
              crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fourth slide"
            />

          </Carousel.Item>

        </Carousel>

      </section> 
      
      <section id='data' className="py-5 draggable my-5" /*seção números*/  > 

        <h1 className='text-center text-secondary' style={{margin: '5rem'}}>Nossos Resultados</h1>

        <Container //import do react bootstrap container que permite a estilização em linhas(Row) e colunas(Col)
        >
          <Row className='justify-content-center text-center px-3 my-4'>

            <Col md="3">
              <h2 className="text-gradient text-secondary">80%</h2>
              <h5 className='mt-3'>de Satisfação dos clientes</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>

            <Col md="3">
              <h2 className="text-gradient text-secondary">30M+</h2> 
              <h5 className='mt-3'>Visitas por ano</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>

            <Col md="3">
              <h2 className="text-gradient text-secondary">10+</h2>
              <h5 className='mt-3'>anos de Mercado</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>

          </Row>
        </Container>

      </section>

      <section id='testimonials' className='d-flex justify-content-center' /* depoimentos*/ >
        
        <Container className='py-2'>

          <Row>
            <h1 className='text-secondary' style={{margin: '5rem', padding: '0'}}>Depoimentos</h1>
          </Row>

          <Row className='my-3 px-2' style={{paddingBottom: '3rem'}}>

            {Testimonials && Testimonials.map((test, index) => { //depoimentos retirados de testimonials.json

                return ( // cada depoimento é criado dentro de um card do react bootstrap com título, texto e imagem

                  <Card key={index} style={{width: '20rem', border: 'none'}}> 

                        <Container> 

                        <Image src={test.img} roundedCircle fluid className="card-img-top m-4" style={{width: '10rem', height: '10rem'}}/>

                        </Container>

                        <Card.Body>

                            <Card.Title className='mb-4 text-secondary'>{test.author}</Card.Title>

                            <Card.Text><FaQuoteLeft className='mx-2' />{test.content}<FaQuoteRight className='mx-2' /></Card.Text>

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
