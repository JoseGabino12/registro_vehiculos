import express from "express";
const router = express.Router();

import { agregarEntrada, eliminarEntradas } from "../controllers/entradaController.js";
import { allEntradasSalidas, allEntradasSalidasById } from "../controllers/allEntradaSalida.js";
import { setStatus } from "../controllers/autoController.js";


//Entrada
router.route("/").get(allEntradasSalidas).delete(eliminarEntradas)

// Entrada en especifico
router.route("/:id").get(allEntradasSalidasById).post(agregarEntrada).put(setStatus);

export default router;