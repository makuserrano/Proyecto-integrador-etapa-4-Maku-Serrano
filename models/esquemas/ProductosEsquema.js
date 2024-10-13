import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema({
  nombre:{
    type:String,
    required: true,

  } ,
  precio: Number,
  stock: Number,
  marca: String,
  categoria: String,
  detalles: String,
  foto: String,
  envio: Boolean,
},{
  timestamps: true,  // Para guardar la fecha y hora de creación y modificación de cada documento
  versionKey:false,

});

export default ProductosEsquema;
