import React from 'react';

import '../Styles/Sobre.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FaSkiingNordic, FaHotel } from "react-icons/fa"; //ícones
import { GiSnowboard } from "react-icons/gi";
import { MdTour } from "react-icons/md";

import { Button } from 'react-bootstrap';

import Services from '../services.json' //json com informações de serviços do cliente


//a função renderIcon carrega o ícone do serviço que está no json como texto
const renderIcon = (iconName) => {

    console.log('Icon Name:', iconName);

    switch (iconName) {

        case "FaSkiingNordic":
            return <FaSkiingNordic />;

        case "FaHotel":
            return <FaHotel />;

        case "GiSnowboard":
            return <GiSnowboard />;

        case "MdTour":
            return <MdTour />;

        default:
            return null;
    }
};
  
function Sobre (props) {
    return (
        <>
            <header>

                <div id='headerDiv' //header com imagem e título e texto
                className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
                style={{backgroundImage: `url(${props.img})`, width: '100%', height: '680px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
                >
                    <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                        
                            <div className="text-light">

                                <h1 className='mb-3'>Somos</h1>

                                <h5 className='mb-3'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. At earum eligendi cum magni sequi nostrum dolore rerum repellat assumenda itaque 
                                    eaque, voluptatem enim maxime impedit illum? Tenetur magni distinctio officia.
                                    Consequatur laudantium distinctio animi exercitationem voluptates labore amet, est dicta explicabo numquam hic quod et, consectetur,
                                     expedita ullam? Neque porro omnis doloribus rerum officiis explicabo sit in voluptatem qui reiciendis. 
                                </h5>

                            </div>
                    
                    </div>
                </div>

            </header>

            <main className='h-100' //seção de serviços
            >
                <h1 className='text-center text-secondary' style={{margin:'3rem'}}>Serviços</h1>
                <section className='d-flex justify-content-around' style={{marginBottom: '3rem'}}>

                    {
                        Services && Services.map(service => {//serviços carregados de services.json
                    
                            return (

                                <div id='cardSobre' className='card rounded' key = {service.id} //cada serviço cria um card que utiliza as estilizações do bootstrap
                                    style={{width: '30rem', height: '15rem', margin: '5rem', paddingTop: '1rem', border:'none'}}
                                >

                                    <div className='card-body'>

                                        <h5 className='card-title text-secondary'>
                                            {renderIcon(service.icon)}
                                            <p></p>
                                            {service.title}
                                        </h5>

                                        <p className='card-text'>{service.content}</p>

                                        <Button className='mb-2' variant='outline-secondary'>Saber Mais</Button>
                                        
                                    </div>

                                </div>

                            )
                        })
                    }
                    
                </section>
                
            </main>
        </>
    )
}
export default Sobre