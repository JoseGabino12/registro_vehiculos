import express from "express";
const router = express.Router();

import { obtenerAutos, agregarAuto, obtenerAuto, actualizarAuto, eliminarAuto, setStatus } from "../controllers/autoController.js";


//Autos general
router.route("/").get(obtenerAutos).post(agregarAuto);
router.route("/status/:id").put(setStatus);

//Auto en especifico
 router.route("/:id").get(obtenerAuto).put(actualizarAuto).delete(eliminarAuto);


export default router;