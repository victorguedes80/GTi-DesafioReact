import 'bootstrap/dist/css/bootstrap.min.css'; //import para utilização do bootstrap como framework de estilo :)
import '../Styles/Color.css'
import '../Styles/Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { GiIceBolt } from "react-icons/gi";
function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-color d-flex justify-content-center" id='mainNav' >
            <div className='container-fluid'>
                <Link className='navbar-brand nav-link custom-link' to='/'><GiIceBolt style={{height: '24px'}} /> LoveSkiing</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mx-2">
                        <Link className='nav-link custom-link' to='/'>Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className='nav-link custom-link' to='/sobre'>Sobre</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className='nav-link custom-link' to='/contato'>Contato</Link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
                    <button class="btn btn-outline-dark" type="submit">Pesquisar</button>
                </form>
            </div>

        </nav>
    )
}
export default Navbar