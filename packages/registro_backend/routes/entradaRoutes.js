import express from "express";
const router = express.Router();

import {
    obtenerEntrada,
    obtenerEntradas,
    agregarEntrada
} from "../controllers/entradaController.js";


//Entrada
router.route("/").get(obtenerEntradas).post(agregarEntrada);

// Entrada en especifico
router.route("/:id").get(obtenerEntrada);


export default router;