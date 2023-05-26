import express from "express";
const router = express.Router();

import { agregarEntrada, eliminarEntrada } from "../controllers/entradaController.js";
import { AllEntradasSalidas, allEntradasSalidasById } from "../controllers/allEntradaSalida.js";


//Entrada
router.route("/").get(AllEntradasSalidas).delete(eliminarEntrada);

// Entrada en especifico
router.route("/:id").get(allEntradasSalidasById).post(agregarEntrada);

export default router;