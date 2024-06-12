import 'bootstrap/dist/css/bootstrap.min.css'; //import para utilização do bootstrap como framework de estilo :)
import React from 'react';
import { FaFacebook, FaYoutube, FaXTwitter, FaInstagram, FaHeart } from 'react-icons/fa6';

function Footer () {
    return (
        <footer className='footer mb-0'>
            <section className="bg-dark py-4 py-md-5 py-xl-8 border-top border-dark d-flex justify-content-center text-light">
                <div className='col-12 col-md-4 col-lg-3 col-x1-2'>
                    <div className='widget'>
                        <h4 className='widget-title mb-4'>Entre em Contato</h4>
                        <address className='mb-4'>Endereço</address>
                        <p className='mb-1'>telefone</p>
                        <p className='mb-0'>Email</p>
                    </div>
                </div>

                <div className='col-18 col-sm-8 col-md-4 col-lg-2'>
                    <div className='widget'>
                        <h4 className='widget-title mb-4'>Serviços</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2'>Lorem impsum</li>
                            <li className='mb-2'>Lorem impsum</li>
                            <li className='mb-2'>Lorem impsum</li>
                            <li className='mb-0'>Lorem impsum</li>
                        </ul>
                    </div>
                </div>

                <div className='col-18 col-sm-8 col-md-4 col-lg-2'>
                    <div className='widget'>
                        <h4 className='widget-title mb-4'>Links</h4>
                        <ul className='list-unstyled'>
                            <li className='footer-link mb-2'>Lorem impsum</li>
                            <li className='mb-2'>Lorem impsum</li>
                            <li className='mb-2'>Lorem impsum</li>
                            <li className='mb-0'>Lorem impsum</li>
                        </ul>
                    </div>
                </div>


                
            </section>
            
            <section className='bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle d-flex justify-content-around'>
                <div>
                    <div className="footer-copyright-wrapper text-center">
                        &copy; 2024. Todos os Direitos Reservados.
                    </div>
                    <div class="credits text-secondary text-center mt-2 fs-8">
                        Desenvolvido com <span class="text-dark"><FaHeart/></span>
                    </div>
                </div>

                <div>
                    <FaFacebook className='px-1 fs-2'/>
                    <FaYoutube className='px-1 fs-2'/>
                    <FaXTwitter className='px-1 fs-2'/>
                    <FaInstagram className='px-1 fs-2'/>
                </div>
            </section>
        </footer>
    )
}
export default Footer