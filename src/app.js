import express from "express";
import ejs from "ejs";

import { PORT } from "./config.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

import indexRouter from "./routes/index.routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Configuracion del motor de plantilla que nos dejó mireya :w
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // -> Los archivos a renderizar.

// Configuraciones para los middleware de entrada de datos :w
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de los routers 
app.use('/', indexRouter); 

// Vizualización de la carpeta public para los archvoz estatics
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
