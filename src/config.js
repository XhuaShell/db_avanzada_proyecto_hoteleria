import { config } from 'dotenv'

config()

export const {
    // Constantes para el servidor de node
    PORT = 3000,
    FOO_COOKIE_SECRET = "esta-vaina-estaba-en-la-documentacion-nosebb", 

    // Constante para la base de datos
    DB_PORT = 5432,
    DB_HOST = 'localhost',
    DB_USER = 'admin',
    DB_PASSWORD = 123456,
    DB_NAME = 'cadena_hotelera',

    // Constante para el hasheo de los datos
    SALT_ROUNDS = 10,
} = process.env;
