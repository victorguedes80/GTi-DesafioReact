import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/contato' element={<Contato img="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>}></Route>
      <Route path='/sobre' element={<Sobre img = "https://cdn.pixabay.com/photo/2023/10/14/09/20/mountains-8314422_1280.png"/>}></Route>
    </Routes>
    <Footer/>
   </Router>
  </React.StrictMode>
);


reportWebVitals();
