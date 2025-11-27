create table categoria (
  id_categoria bigint not null,
  nombre varchar(50) not null,
  primary key (id_categoria)
);

create table hotel (
  id_hotel bigint not null,
  nombre varchar(100) not null,
  direccion varchar(200),
  anio_inauguracion int,
  id_categoria bigint not null references categoria(id_categoria),
  primary key (id_hotel)
);

create table telefono_hotel (
  id_hotel bigint not null references hotel(id_hotel),
  telefono varchar(20) not null,
  primary key (id_hotel, telefono)
);

create table tipo_habitacion (
  id_tipo_habitacion bigint not null,
  nombre varchar(50) not null,
  capacidad_max int not null,
  precio numeric(12,2) not null,
  primary key (id_tipo_habitacion)
);

create table habitacion (
  id_habitacion bigint not null,
  id_hotel bigint not null references hotel(id_hotel),
  id_tipo_habitacion bigint not null references tipo_habitacion(id_tipo_habitacion),
  numero_habitacion varchar(10) not null,
  nro_piso int,
  unique (id_hotel, numero_habitacion),
  primary key (id_habitacion)
);

create table huesped (
  id_huesped bigint not null,
  nombre varchar(120) not null,
  direccion varchar(200),
  fecha_nacimiento date not null,
  primary key (id_huesped)
);

create table telefono_huesped (
  id_huesped bigint not null references huesped(id_huesped),
  telefono varchar(20) not null,
  primary key (id_huesped, telefono)
);

create table agencia (
  id_agencia bigint not null,
  nombre varchar(120) not null,
  direccion varchar(200),
  telefono varchar(20),
  email varchar(120),
  comision numeric(5,2),
  primary key (id_agencia)
);

create table reserva (
  id_reserva bigint not null,
  id_hotel bigint not null references hotel(id_hotel),
  id_huesped_responsable bigint not null references huesped(id_huesped),
  id_agencia bigint references agencia(id_agencia),
  fecha_reserva timestamp not null,
  fecha_inicio date not null,
  fecha_fin date not null,
  cantidad_personas int not null,
  incluye_mascotas boolean default false,
  primary key (id_reserva)
);

create table detalle_reserva (
  id_detalle bigint not null,
  id_reserva bigint not null references reserva(id_reserva),
  id_tipo_habitacion bigint not null references tipo_habitacion(id_tipo_habitacion),
  cantidad_habitaciones int not null,
  precio_noche numeric(12,2) not null,
  cantidad_noches int not null,
  subtotal numeric(12,2) not null,
  primary key (id_detalle)
);

create table pago (
  id_pago bigint not null,
  id_reserva bigint not null references reserva(id_reserva),
  monto numeric(12,2) not null,
  tipo_pago varchar(20) not null,
  metodo_pago varchar(30) not null,
  fecha_pago timestamp not null,
  primary key (id_pago)
);

create table ocupacion (
  id_ocupacion bigint not null,
  id_reserva bigint not null references reserva(id_reserva),
  id_huesped bigint not null references huesped(id_huesped),
  id_habitacion bigint not null references habitacion(id_habitacion),
  fecha_entrada timestamp not null,
  fecha_salida timestamp,
  primary key (id_ocupacion)
);

create table servicio (
  id_servicio bigint not null,
  nombre varchar(100) not null,
  descripcion varchar(200),
  precio numeric(12,2) not null,
  primary key (id_servicio)
);

create table reserva_servicio (
  id_reserva_servicio bigint not null,
  id_reserva bigint not null references reserva(id_reserva),
  id_servicio bigint not null references servicio(id_servicio),
  cantidad int not null,
  subtotal numeric(12,2) not null,
  primary key (id_reserva_servicio)
);

create table historial_evento_reserva (
  id_evento bigint not null,
  id_reserva bigint not null references reserva(id_reserva),
  evento_tipo varchar(40) not null,
  fecha_hora timestamp not null,
  detalle varchar(200),
  primary key (id_evento)
);
