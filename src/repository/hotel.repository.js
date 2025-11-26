import { Hotel } from "../model/hotel.";

export class hotelRepository {
    constructor() {
        /**
         * Si hay una invocación a otra tabla de la base de datos
         * ejemplo: reservas, empleados, xxx..
         * En el constructor se debe inicializar la clase del repositorio
         * de ésa tabla.
         */
        // EmpleadoRepositorio = new EmpleadoRepositorio();
    }

    /**
     * Métodos CRUD básicos, son los que nos permiten gestionar la tabla
     * de manera individual. Ésto es lo que se hace en la clase DAO
     * 
     * El idioma daría igual en éste caso
     */

    // ingles
    getAll() {}
    findById() {}
    save(hotel) {}
    update(hotel) {}
    remove(hotel) {}

    // español
    obtenerTodos() {}
    encontrarPorId() {}
    guardar(hotel) {}
    actualizar(hotel) {}
    remover(hotel) {}

    /**
     * La idea es que después de los métodos básicos que es lo que se hace
     * en las clases DAO que vimos con Sonia, abajo haya otros métodos que
     * nos permitan obtener datos o conectarnos con la base de datos
     * de otras manera, siempre y cuando lo que hagamos sea perteneciente
     * a la lógica de negocio asociada al hotel en éste caso.
     *
     * Algunas de las funcionalidades de éste patron de diseño son:
     *  -> ayudana a tener una separación de capas, así ya no tenemos
     *      la conección con la base de datos en el mísmo controlador.
     *  -> Ayuda a la validación de datos, funciona como un middleware
     *  -> si en algun momento canviamos la base de datos (en éste caso aplicará)
     *      hace que una migración de base de datos sea muy sencilla.
     *  -> Ayuda a que trabajemos de manera menos acoplada.
     */

    // otros métodos de las reglas de negocio:
    obtenerReservasDelHotel() {}
    obtenerCategoriasDelHotel() {}
}
