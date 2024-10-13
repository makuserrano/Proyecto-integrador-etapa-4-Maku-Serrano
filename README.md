# Inicializando la etapa 4

```sh
touch server.js && npm init -y && npm i express dotenv mongoose && npm i nodemon -D
git init && touch .gitignore
touch .env .env.example
```

## Creando carpetas del proyecto

```sh
mkdir controllers models constants utils
mkdir routers middlwares
```

## Copiamos de la página de express el "hello World"

<https://expressjs.com/es/starter/hello-world.html>

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## Modificamos el package.json

```json
  "version": "1.0.0",
  "type": "module", // agrego ESM
  "main": "server.js",
```

```json
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js" // agrego script
}
```

## restore del dump llocal en la base remota
```sh
mongorestore --uri "mongodb+srv://cluster0.hlllp.mongodb.net/" --username makuserrano --nsInclude integrador_etapa_4.* dump

mongoexport "mongodb+srv://cluster0.hlllp.mongodb.net/" --username makuserrano --db bc_bootcamp
```


## instalar cors (problema seguridad.)
```sh
npm i cors
~ agg en server.js
import cors from 'cors'
~agregamos el middleware
app.use(cors()); // corrije error cors(cualquier puede abrirlo)```