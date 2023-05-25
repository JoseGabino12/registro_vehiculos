import express from "express";
const router = express.Router();

import { obtenerAutos, agregarAuto, obtenerAuto, actualizarStatusAuto, eliminarAuto } from "../controllers/autoController.js";


//Inventario general
router.route("/").get(obtenerAutos).post(agregarAuto);

// Productos en especifico
 router.route("/:id").get(obtenerAuto).put(actualizarStatusAuto).delete(eliminarAuto);

//  .put(actualizarAuto).delete(eliminarAuto)

export default router;