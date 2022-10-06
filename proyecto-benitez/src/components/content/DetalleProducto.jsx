import React from 'react';

const DetalleProducto = ({producto}) => {
    return (
        <>
         
  <div className="">
    <div className="">
      <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>  
        <p className="card-text">{producto.tipo}</p>
        <p className="card-text">{producto.precio}</p>
        <button className='btn btn-dark'>Comprar</button>
        </div>
        </div>
      </div>

        </>
    );
}

export default DetalleProducto;