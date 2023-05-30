import express from "express";
const router = express.Router();

import {
    eliminarSalidas,
    modificarSalida
} from "../controllers/salidaController.js";

import { setStatus } from "../controllers/autoController.js";


//Salida
router.route("/").delete(eliminarSalidas);

//Salida en especifico
router.route("/:id").put(modificarSalida);
// .post(agregarSalida);


export default router;