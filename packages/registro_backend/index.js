import express from "express"
import {PrismaClient} from "@prisma/client";
import autoRoutes from "./routes/autoRoutes.js"
import entradaRoutes from "./routes/entradaRoutes.js"
import salidaRoutes from "./routes/salidaRoutes.js"
import cors from "cors";
// import dotenv from "dotenv";

const prisma = new PrismaClient();
const app = express();

// var whitelist = ['http://localhost:3000/']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('No permitido por CORS'))
//     }
//   }
// }

app.use(cors());

app.use(express.json());

app.use("/api/auto", autoRoutes);
app.use("/api/entrada", entradaRoutes);
app.use("/api/salida", salidaRoutes);


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Desde el puerto ${PORT} el backend`);
});