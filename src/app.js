import express from "express";
import session from "express-session";
import connectPgSimple  from "connect-pg-simple";
import ejs from "ejs";

import { PORT,FOO_COOKIE_SECRET } from "./config.js";
import { pool } from "./repository/config/pg.config.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

import publicRouter from "./routes/public.routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pgSession = connectPgSimple(session);
const app = express();

// Configuracon del sistema de autentificaciones por express-session
app.use(session({
  store: new pgSession({
    pool : pool,
    tableName : 'sesiones', 
    createTableIfMissing: true, // -> Crea la tabla en la DB automaticamente 
  }),
  secret: FOO_COOKIE_SECRET,
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 dias
})); 

// Configuracion del motor de plantilla que nos dejó mireya :w
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // -> Los archivos a renderizar.

// Configuraciones para los middleware de entrada de datos :w
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de los routers
app.use("/", publicRouter);

// Vizualización de la carpeta public para los archvoz estatics
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
