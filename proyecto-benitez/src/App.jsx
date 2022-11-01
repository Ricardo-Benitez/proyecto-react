import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Carrito from './components/Carrito';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Categoria from './components/Categoria';
import Producto from './components/Producto';
import Footer from './components/Footer';
const App = () => {

    return (
        <>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/producto/:id" element={<Producto/>} />
              <Route path="/categoria/:id" element={<Categoria/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="*" element={<h1>Error 404</h1>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </>
    );
}

export default App;