import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import './Styles/Modules.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/contato' element={<Contato/>}></Route>
      <Route path='/sobre' element={<Sobre/>}></Route>
    </Routes>
    <Footer/>
   </Router>
  </React.StrictMode>
);


reportWebVitals();
