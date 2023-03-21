create table universitarios (
    id integer(3) primary key auto_increment,
    nombre character(50),
    correo character(50),
    universidad character(50)
)

INSERT INTO `universitarios` (`id`, `nombre`, `correo`, `universidad`) 
VALUES (NULL, 'Juan', 'juan@gmail.com', 'Institución universitaria Atonio José Camacho'), 
       (NULL, 'Pedro', 'pedro@gmail.com', 'Universidad Autonoma de Occidente');