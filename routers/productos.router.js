import express from "express";
import controllers from "../controllers/productos.controllers.js"; 
// controllers.getAll (ejemplo)
const routerProductos = express.Router();



//  crud -> create | read | update | delete



// ? GET ALL(READ) -> REQUEST de todos los productos

routerProductos.get("/", controllers.getAll);

// ? GET ONE (READ) -> REQUEST de un prducto

routerProductos.get("/:id", controllers.getOne);

// ? POST (CREATE) -> REQUEST de creacion de producto

routerProductos.post("/", controllers.create);

// ? PUT (UPDATE) -> REQUEST de actualizar producto

routerProductos.put("/:id", controllers.update);

// ? DELETE (DELETE) -> REQUEST de eliminar producto

routerProductos.delete("/:id", controllers.remove);

export default routerProductos;
