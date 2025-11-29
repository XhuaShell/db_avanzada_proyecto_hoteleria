-- Propuesta inicial para la autenticación dentro del sistema
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Ésta tabla la gestiona express de manera automática
CREATE TABLE session (
    sid TEXT PRIMARY KEY,
    sess JSON NOT NULL,
    expire TIMESTAMP NOT NULL 
);

create table rol (
    id_rol SERIAL,
    nombre VARCHAR(70) UNIQUE,
    descripcion VARCHAR(200),
    PRIMARY KEY (id_rol)
);

create table usuario (
    id_usuario UUID DEFAULT uuid_generate_v4 (),
    nombre_usuario VARCHAR(70) UNIQUE,
    email TEXT NOT NULL UNIQUE,
    hash_password TEXT NOT NULL,
    fecha_creacion DATETIME NOT NULL,
    id_rol INT REFERENCES rol (id_rol),
    PRIMARY KEY (id_usuario),
    CHECK (
        LENGTH(hash_password) > 3
        AND LENGTH(nombre_usuario) > 3
    )
);



create table autenticacion (
    id_autenticacion UUID DEFAULT uuid_generate_v1 (),
    id_usuario UUID references usuario (id_usuario),
    id_session, -- Ésto apunta a la session a la que se ingresó
    intento_exitoso boolean,
    fecha DATETIME,
    ip_origen VARCHAR(45),
    motivo VARCHAR(100),
    PRIMARY KEY (id_autenticacion) FOREIGN KEY id_usuario REFERENCES usuario (id_usuario)
);

CREATE TABLE log_accesos_denegados (
    id_log SERIAL,
    id_usuario UUID,
    ruta TEXT,
    rol_detectado TEXT,
    rol_requerido TEXT,
    autorizado BOOLEAN,
    fecha TIMESTAMP,
    ip TEXT
)

-- Considerar el uso de cascadas para la actualización éxitosa en todas las tablas cuya relación no sea PK.

INSERT INTO
    rol (rol_name)
VALUES ('ADMIN'),
    ('USUARIO'),
    ('EMPLEADO');