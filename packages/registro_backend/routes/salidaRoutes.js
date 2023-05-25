import express from "express";
const router = express.Router();

import {
    obtenerSalida,
    obtenerSalidas,
    agregarSalida,
    eliminarSalidas
} from "../controllers/salidaController.js";


//Salida
router.route("/").get(obtenerSalidas).delete(eliminarSalidas);

//Salida en especifico
router.route("/:id").get(obtenerSalida).post(agregarSalida);


export default router;