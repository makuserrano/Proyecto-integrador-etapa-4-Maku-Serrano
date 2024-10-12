import mongoose from "mongoose";
import ProductosEsquema from "./ProductosEsquema.js";

//! Modelo Mongoose creado.

const ProductosModelo = mongoose.model('productos', ProductosEsquema)

const obtenerTodos = async () => {
  try {
      const productos = await ProductosModelo.find()
      // console.log(productos)
      return productos  
   } catch (err) {
    console.log('[obtenerTodos]', err)
    
   }
};
const obtenerUnProducto = async (id) => {
   try {
    const producto = await ProductosModelo.findById(id)
    console.log(producto)
    return producto
   } catch (err) {
    console.log('[ProductosModelo]',err )
   }
 };
const crearProducto = async (producto) => {
  try {
    // ? primera forma para crear un producto con mongoose
    // const docMongooseProducto = new ProductosModelo(producto)
    // const productoCreado = await docMongooseProducto.save() //guardo en la DB
    const productoCreado = await ProductosModelo.create(producto)
    return productoCreado
  } catch (err) {
    console.log('[crearProducto]',err)
  }

};
const updateProductos = () => {};
const deleteProducto = async (id) => {
  try {
  
   const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
    return productoBorrado
} catch (err) {
  console.log('[deleteProducto]', err)
}};

export default {
  obtenerTodos,
  obtenerUnProducto,
  crearProducto,
  updateProductos,
  deleteProducto,
};
