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
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(handleMongoId(producto)); //paso la funcion para quitarle el _id, asi lo conecto sin problemas
  } catch (err) {
    console.log("[getOne]", err);
    res.status(500).json({ message: "Hubo un error al obtener el producto" });
  }
};

const create = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;

  // Validar que los campos obligatorios existan
  if (!nombre || !descripcion || precio === undefined) {
    return res.status(400).json({
      message: "nombre, descripcion y precio son requeridos.",
    });
  }

  // Validar tipos de datos
  if (typeof nombre !== 'string' || typeof descripcion !== 'string') {
    return res.status(400).json({
      message: "El nombre y la descripción deben ser texto.",
    });
  }

  // Validar longitud
  if (nombre.length < 2) {
    return res.status(400).json({
      message: "El nombre debe tener al menos 2 caracteres.",
    });
  }

  if (descripcion.length < 2) {
    return res.status(400).json({
      message: "La descripción debe tener al menos 2 caracteres.",
    });
  }

  // Validar que el precio sea un número y positivo
  if (isNaN(precio) || precio < 0 || typeof precio !== 'number') {
    return res.status(400).json({
      message: "El precio debe ser un número positivo.",
    });
  }

  try {
    const productoCreado = await modelos.crearProducto(req.body);
    res.status(201).json(handleMongoId(productoCreado));
  } catch (err) {
    console.log("[create]", err);
    res.status(500).json({ message: "Error al crear el producto." });
  }
};


const update = async (req, res) => {
  const id = req.params.id;
  const productoEditado = req.body;

  try {
    // Verifica
    const productoExistente = await modelos.obtenerUnProducto(id);

    if (!productoExistente) {
      return res.status(404).json({
        error: "Producto no encontrado para actualizar.",
      });
    }

    // si existe valida
    const productoActualizado = await modelos.updateProductos(
      id,
      productoEditado
    );
    res.json(handleMongoId(productoActualizado));
  } catch (err) {
    console.log("[update]", err);
    res.status(500).json({
      error: "Error al actualizar el producto.",
    });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    // Verificar si el producto existe 
    const productoExistente = await modelos.obtenerUnProducto(id);

    if (!productoExistente) {
      return res.status(404).json({
        error: "Producto no encontrado. No se puede eliminar.",
      });
    }

    const productoBorrado = await modelos.deleteProducto(id);
    res.json(handleMongoId(productoBorrado));
  } catch (err) {
    console.log("[remove]", err);
    res.status(500).json({
      error: "Error al intentar eliminar el producto.",
    });
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
