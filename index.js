import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/", router);
app.listen(PORT, () => {
  console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
