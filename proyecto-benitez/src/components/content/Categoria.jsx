import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';

const Categoria = () => {
    
    const [productos, setProductos] = useState([]);
    const {cate} = useParams()
    useEffect(() => {
        consultarBDD('../Producto.json').then(productos => {
            const productosCategoria = productos.filter(Producto => Producto.categoria === cate )
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                
                            <p className="card-text">Precio: ${producto.precio}</p>
                            
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.nombre}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [cate]);
    return (
        <div className="row">
            {productos}
        </div>
        );
}

export default Categoria;