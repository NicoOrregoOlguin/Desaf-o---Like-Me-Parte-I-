# React + Express JS

IMPORTANTE! 
Para que el proyecto funcione, debemos crear la base de datos, en este caso utilicé la siguiente QUERY mediante la terminal psql: 
CREATE DATABASE likeme;
\c likeme
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);

PD: Para realizar la conectividad, es importante que una vez creada la base de datos se conecte con el usuario o de lo contrario no permitirá eliminar o agregar la imagen.

![imagen](https://github.com/NicoOrregoOlguin/Desaf-o---Like-Me-Parte-I-/assets/113557666/6ffcc0fd-e405-4a93-a6a0-0bec78ccacfb)
