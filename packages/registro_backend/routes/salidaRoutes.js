import express from "express";
const router = express.Router();

import {
    obtenerSalida,
    obtenerSalidas,
    agregarSalida
} from "../controllers/salidaController.js";


//Entrada
router.route("/").get(obtenerSalidas);

// Entrada en especifico
router.route("/:id").get(obtenerSalida).post(agregarSalida);


export default router;