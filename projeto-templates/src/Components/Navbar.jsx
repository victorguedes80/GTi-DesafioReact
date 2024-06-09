import 'bootstrap/dist/css/bootstrap.min.css'; //import para utilização do bootstrap como framework de estilo :)
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='mainNav' >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item mx-2">
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className="nav-item mx-2">
                    <Link className='nav-link' to='/sobre'>Sobre</Link>
                </li>
                <li className="nav-item mx-2">
                    <Link className='nav-link' to='/contato'>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar