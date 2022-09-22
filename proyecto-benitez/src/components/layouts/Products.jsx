import React from 'react';

const Productos = () => {
    return (
        <>
        <div className='card-conteiner'>
        <div className="card">
          <img src="img/foto4.jpg" className="card-img-top" alt="Vaso de cerveza" />
          <div className="card-body">
            <h5 className="card-title">$ 400</h5>
            <p className="card-text">Pinta de cerveza doble ipa</p>
            <a href="" className="btn btn-primary">Agregar al carrito</a>
          </div>
        </div>

        <div className="card">
        <img src="img/foto1.jpg" className="card-img-top" alt="Vaso de cerveza" />
        <div className="card-body">
          <h5 className="card-title">$ 400</h5>
          <p className="card-text">Pinta de cerveza ipa argenta</p>
          <a href="" className="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
      </div>
      </>
    );
}

export default Productos;
