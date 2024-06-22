import 'bootstrap/dist/css/bootstrap.min.css'; //import para utilização do bootstrap como framework de estilo :)
import '../Styles/Color.css'

import React from 'react';

import { FaFacebook, FaYoutube, FaXTwitter, FaInstagram, FaHeart } from 'react-icons/fa6'; //ícones

function Footer () {
    return (
        <footer className='footer m-0'>

            <section className="custom-color py-4 py-md-5 py-xl-8 d-flex justify-content-center" /*parte de cima do footer*/>

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
                            <li className='footer-link mb-2'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                            <li className='footer-link mb-2'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                            <li className='footer-link mb-2'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                            <li className='footer-link mb-0'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-18 col-sm-8 col-md-4 col-lg-2'>
                    <div className='widget'>
                        <h4 className='widget-title mb-4'>Links</h4>
                        <ul className='list-unstyled'>
                            <li className='footer-link mb-2'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                            <li className='footer-link mb-2'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                            <li className='footer-link mb-2'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                            <li className='footer-link mb-0'><a className='text-decoration-none' href="#" style={{color: '#000'}}>Lorem impsum</a></li>
                        </ul>
                    </div>
                </div>

            </section>
            
            <section className='bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle d-flex justify-content-around'/* parte de baixo do footer */>

                <div>
                    <div className="footer-copyright-wrapper text-center">
                        &copy; 2024. Todos os Direitos Reservados.
                    </div>
                    <div class="credits text-secondary text-center mt-2 fs-8">
                        Desenvolvido com <span class="text-dark"><FaHeart/></span>
                    </div>
                </div>

                <div>
                    <a className='footer-link' href="#" style={{color: '#000'}}><FaFacebook className='px-1 fs-2'/></a>
                    <a className='footer-link' href="#" style={{color: '#000'}}><FaYoutube className='px-1 fs-2'/></a>
                    <a className='footer-link' href="#" style={{color: '#000'}}><FaXTwitter className='px-1 fs-2'/></a>
                    <a className='footer-link' href="#" style={{color: '#000'}}><FaInstagram className='px-1 fs-2'/></a>
                </div>

            </section>

        </footer>
    )
}
export default Footer