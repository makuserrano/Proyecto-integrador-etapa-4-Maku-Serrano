import modelos from '../models/productos.models.js'

const getAll = async (req, res) => {
  try {
    const productos = await modelos.obtenerTodos();
    res.json({ productos })
  } catch (err) {
    console.log("[getAll]", err);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;

  try {
    const producto = await modelos.obtenerUnProducto(id);
    res.send(`Ok -> GET ONE ID: ${id}`);
  } catch (err) {
    console.log("[getOne]", err);
  }
};

const create = async (req, res) => {
  const producto = req.body;
  // console.log(producto)
  try {
    const productoCreado = await modelos.crearProducto(producto);
    res.status(201).json({
      producto: productoCreado
    });
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
    res.send(`producto editado ${productoActualizado}`);
  } catch (err) {
    console.log("[update]", err);
  }
};
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const productoBorrado = await modelos.deleteProducto(id);
    // console.log(productoBorrado)
    res.json({producto:productoBorrado});
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
