import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarServicio = (prod, cant) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) 

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const id = prod[0]
            const x = prod[1]
          const prodCarrito = {id, ...x, cantidad: cant}
          aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))
        console.log(carrito)

    }

    const quitarServicio = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) 

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
        console.log(carrito)
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarServicio, quitarServicio}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};