import { Hotel } from "../model/hotel.";

obtenerHoteles() {
    SELECT * FROM Hotel;
}

encontrarHotelPorId(id_hotel) {
    SELECT * FROM Hotel WHERE id_hotel = ?;
}

guardarHotel(nombre, direccion, anio_inauguracion, id_categoria) {
    INSERT INTO Hotel (nombre, direccion, anio_inauguracion, id_categoria)
    VALUES (?, ?, ?, ?);
}

actualizarHotel(id_hotel, nombre, direccion, anio_inauguracion, id_categoria) {
    UPDATE Hotel
    SET nombre = ?, direccion = ?, anio_inauguracion = ?, id_categoria = ?
    WHERE id_hotel = ?;
}

removerHotel(id_hotel) {
    DELETE FROM Hotel WHERE id_hotel = ?;
}

