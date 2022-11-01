import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const prodMostrar  = carrito.map(producto => 
            <div className="card cardProducto" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                         <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Tipo: {producto.tipo}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                            </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);
    
   const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} </div> : <> <h1>No existen elementos en el carrito <Link to="/Productos"><button className='btn btn-dark'>Ir a Productos</button></Link></h1></>
          
    return app
}
export default Carrito;