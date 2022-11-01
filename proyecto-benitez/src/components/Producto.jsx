import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from './Utilidades/FuncionesUtiles';
import DetalleProducto from './DetalleProducto';
import { getProducto } from './Utilidades/firebase';


const Producto = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    getProducto(id).then(prod => {
      setProducto(prod)
     })
 
  }, [])

  if (producto.length != 0) {
  return (
    <div className='card mb-3' style={{maxWidth: '540px'}}>
      <DetalleProducto producto={producto}/>
      
      
    </div>
  );
}}

export default Producto;