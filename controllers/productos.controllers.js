import modelos from "../models/productos.models.js";
import handleMongoId from "../utils/handle-mongo-id.js";

const getAll = async (req, res) => {
  try {
    const productos = await modelos.obtenerTodos();
    res.json(handleMongoId(productos));
  } catch (err) {
    console.log("[getAll]", err);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;

  try {
    const producto = await modelos.obtenerUnProducto(id);
    res.json(handleMongoId(producto)); //paso la funcion para quitarle el _id, asi lo conecto sin problemas
  } catch (err) {
    console.log("[getOne]", err);
  }
};

const create = async (req, res) => {
  const producto = req.body;
  // console.log(producto)
  try {
    const productoCreado = await modelos.crearProducto(producto);
    res.status(201).json(handleMongoId(productoCreado));
  } catch (err) {
    console.log("[create]", err);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const productoEditado = req.body;
  try {
    const productoActualizado = await modelos.updateProductos(
      id,
      productoEditado
    );
    res.json(handleMongoId(productoActualizado));
  } catch (err) {
    console.log("[update]", err);
  }
};
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const productoBorrado = await modelos.deleteProducto(id);
    // console.log(productoBorrado)
    res.json(handleMongoId(productoBorrado));
  } catch (err) {
    console.log("[remove]", err);
  }
};
export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
