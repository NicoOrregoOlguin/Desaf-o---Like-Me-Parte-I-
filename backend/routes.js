import express from "express";
import {
  renderHome,
  rutaNoEncontrada,
  getPosts,
  addPost,
  editPostLike,
  deletePost, // Importar el controlador de eliminación
} from "./controller.js"; // Ajusta la ruta de importación aquí

const router = express.Router();

router.get("/", renderHome);
router.get("/posts", getPosts);
router.post("/posts", addPost);
router.put("/posts/like/:id", editPostLike);
router.delete("/posts/:id", deletePost); // Agregar la ruta de eliminación
router.get("/*", rutaNoEncontrada);

export default router;
