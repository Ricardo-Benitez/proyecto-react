import React from 'react';
import Form from './Form';
import Dropdow from './Dropdow';
import Secciones from './Secciones';

const Navbar = () => {
  const listDrowdon = ["Pintas", "botellas", "barriles"]  
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
               <Secciones/>
               <Dropdow lista={listDrowdon}/>
              </ul>
             <Form busqueda="buscar producto"/>
            </div>
          </div>
        </nav>

      );
}

export default Navbar;