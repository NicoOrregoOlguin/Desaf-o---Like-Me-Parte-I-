# React + Express JS

![imagen](https://github.com/NicoOrregoOlguin/Desaf-o---Like-Me-Parte-I-/assets/113557666/314ee59e-cf79-4993-9704-76ca0526c5e6)


Se configura proyecto de tal manera que se pueda registrar en la base de datos y se pueda visualizar los Likes en la tabla de PostgreSQL

![imagen](https://github.com/NicoOrregoOlguin/Desaf-o---Like-Me-Parte-I-/assets/113557666/f73451c0-20ec-4261-8758-d8b7865bbc6b)

En el caso de eliminar, al presionarlo también se vería afectado en la Base de Datos:

![imagen](https://github.com/NicoOrregoOlguin/Desaf-o---Like-Me-Parte-I-/assets/113557666/86b22a27-119e-48d2-bc93-564fd9f07214)

![imagen](https://github.com/NicoOrregoOlguin/Desaf-o---Like-Me-Parte-I-/assets/113557666/b0dea248-a8cc-4404-8f69-5c3ed3692990)

## Información Importante

### Ruta PUT
- **Definición**: Se ha definido en `routes.js` y permite manejar la actualización de los "likes" en los posts.
- **Función Controladora**: La función `editPostLike` en `controller.js` maneja la solicitud PUT y llama a la consulta correspondiente.
- **Consulta SQL**: La función `editPostLikeQuery` en `queries.js` ejecuta la consulta SQL para actualizar los likes.
- **Manejo de Errores**: Se ha configurado `try-catch` para capturar cualquier error en las consultas SQL.

### Ruta DELETE
- **Definición**: Se ha definido en `routes.js` la ruta DELETE para manejar la eliminación de posts.
- **Función Controladora**: En `controller.js` tenemos la función `deletePost` que contiene la lógica para eliminar el post.

### Capturar Posibles Errores
- **Implementación**: Se ha implementado en todas las funciones de consultas SQL un `try-catch` que permite capturar todos los posibles errores y lanzarlos para que el controlador los maneje.

## Configuración de la Base de Datos

Para que el proyecto funcione, debemos crear la base de datos. Utiliza la siguiente QUERY mediante la terminal `psql`:

```sql
CREATE DATABASE likeme;
\c likeme
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);
