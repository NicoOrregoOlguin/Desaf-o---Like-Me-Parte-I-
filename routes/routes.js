import express from "express";
import {
  renderHome,
  rutaNoEncontrada,
  getPosts,
  addPost,
  editPostLike,
  deletePost, 
} from "../controller/controller.js";

const router = express.Router();

router.get("/", renderHome);
router.get("/posts", getPosts);
router.post("/posts", addPost);
router.put("/posts/like/:id", editPostLike);
router.delete("/posts/:id", deletePost); 
router.get("/*", rutaNoEncontrada);

export default router;
