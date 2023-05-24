import express from "express"
import {PrismaClient} from "@prisma/client";
import autoRoutes from "./routes/autoRoutes.js"
import entradaRoutes from "./routes/entradaRoutes.js"
import salidaRoutes from "./routes/salidaRoutes.js"
// import dotenv from "dotenv";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use("/api/auto", autoRoutes);
app.use("/api/entrada", entradaRoutes);
app.use("/api/salida", salidaRoutes);


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Desde el puerto ${PORT} el backend`);
});

module.exports = app;