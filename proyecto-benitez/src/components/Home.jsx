import React, {useState, useEffect} from 'react';
import { consultarBDD } from "./Utilidades/FuncionesUtiles";
import {Link} from 'react-router-dom';
import { getProductos } from './Utilidades/firebase';


const Home = ({ greeting }) => {

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos().then(productos =>  {
          const cardProducto = productos.map(producto => 
              <div className="card cardProductos" key={producto[0]}>
                  <img src={producto[1].img} className="card-img-top" alt={producto[1].nombre} />
                      <div className="card-body">
                          <h5 className="card-title">{producto[1].nombre}</h5>
                           
                          <p className="card-text">${producto[1].precio}</p>          
                          
                          
                          <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto[1].nombre}`}>Ver Productos</Link></button>
                  </div>
              </div>)
          
          setProductos(cardProducto)
          })
  }, []);


    return (
      <div className="row">
        <h1 className="text-center">{greeting}</h1>
        {productos}
      </div>
    );
  };
  
  export default Home;