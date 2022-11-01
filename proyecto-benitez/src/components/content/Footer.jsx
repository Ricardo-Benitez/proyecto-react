import { memo } from "react";



const Footer = () => {
    return (
        <>
            <footer>
        <div className="text-footer">
          <h4>LAGASHBEER</h4>
          <p>Zaninetti 565,concepcion del uruguay, entre rios, Argentina</p>
          <p>Lagashbeer@gmail.com</p>
          <p>Tel: +54 3442 512340</p>
          <p>Horario de Atencion: De Miercoles a Domingos 20hs a 02hs</p>
          <p>Todos los derechos Reservados</p>
        </div>
      </footer>  
        </>
    );
}

export default memo(Footer);