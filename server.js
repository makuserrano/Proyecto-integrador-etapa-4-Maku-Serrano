import express from "express";

import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
import getConnection from "./utils/get-connection.js";

// VARIABLES
const app = express();
const PORT = process.env.PORT || 2222;
const uri_remota = process.env.URI_MONGO;

// MIDDLEWARES
app.use(express.json()); //interpreta el body, si no me sale undefined


// RUTAS
app.use("/api/v1/productos", routerProductos);

app.get("/", (req, res) => {
  res.send("hola soy el back"); // http://localhost:8080 ahi me aparece.
});

app.all("*", (req, res) => {
  res.status(404).json({
    ruta: `${req.url}`,
    metodo: `${req.method}`,
    mensaje: `no se puede accerder al recurso`,
  });
});


app.listen(PORT, (err) => {
  if (err) throw new Error("No se pudo levantar el servidor", err);
  console.log(`Servidor funcionando en: http://localhost:${PORT}`);
  getConnection(uri_remota);
});
