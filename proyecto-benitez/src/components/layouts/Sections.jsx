import React from 'react';

const Secciones = () => {
    return (
        <>
        <li className="nav-item">
              <a className="nav-link active" href="#">LagashBeer
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about</a>
            </li>
            <li className="nav-item">
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">carrito</button>
        </li>
    </>
    );
}

export default Secciones;
