import express from "express";
const router = express.Router();

import { agregarEntrada } from "../controllers/entradaController.js";
import { AllEntradasSalidas, allEntradasSalidasById } from "../controllers/allEntradaSalida.js";


//Entrada
router.route("/").get(AllEntradasSalidas).post(agregarEntrada);

// Entrada en especifico
router.route("/:id").get(allEntradasSalidasById);


export default router;