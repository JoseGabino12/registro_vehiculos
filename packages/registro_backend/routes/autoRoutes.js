import express from "express";
const router = express.Router();

import { obtenerAutos, agregarAuto, obtenerAuto, actualizarAuto, eliminarAuto } from "../controllers/autoController.js";


//Autos general
router.route("/").get(obtenerAutos).post(agregarAuto);

//Auto en especifico
 router.route("/:id").get(obtenerAuto).put(actualizarAuto).delete(eliminarAuto);


export default router;