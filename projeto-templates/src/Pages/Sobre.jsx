import React from 'react';
import Services from '../services.json'
function Sobre (props) {
    return (
        <>
            <header>
            <div id='headerDiv'
            className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
            style={{backgroundImage: `url(${props.img})`, width: '100%', height: '680px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
            >
                <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                    
                        <div className="text-light">
                            <h1 className='mb-3'>Somos</h1>
                            <h5 className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At earum eligendi cum magni sequi nostrum dolore rerum repellat assumenda itaque eaque, voluptatem enim maxime impedit illum? Tenetur magni distinctio officia.
                            Consequatur laudantium distinctio animi exercitationem voluptates labore amet, est dicta explicabo numquam hic quod et, consectetur, expedita ullam? Neque porro omnis doloribus rerum officiis explicabo sit in voluptatem qui reiciendis. </h5>
                        </div>
                  
                </div>
            </div>
            </header>

            <body className='h-100'>
                <section className='d-flex justify-content-center'>
                    {
                        Services && Services.map(service => {
                            return (
                                <div className='card rounded m-3' style={{width: '25rem', height: '10rem'}} key = {service.id}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{service.title}</h5>
                                        <p className='card-text'>{service.content}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                    
                </section>
                
            </body>
        </>
    )
}
export default Sobre