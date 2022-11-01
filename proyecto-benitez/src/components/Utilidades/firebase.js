
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "lagashbeer.firebaseapp.com",
  projectId: "lagashbeer",
  storageBucket: "lagashbeer.appspot.com",
  messagingSenderId: "875695574979",
  appId: "1:875695574979:web:fd152ad12c60bd26a33776"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('../Prodcuto.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
       await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            categoria: producto.categoria,
            idCategoria: producto.idCategoria,
            descripcion: producto.descripcion,
            precio: producto.precio,
            img: producto.img
       })
    })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

export {cargarBaseDeDatos, getProductos, getProducto}