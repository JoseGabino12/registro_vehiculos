import express from "express"
import autoRoutes from "./routes/autoRoutes.js"
import entradaRoutes from "./routes/entradaRoutes.js"
import salidaRoutes from "./routes/salidaRoutes.js"
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auto", autoRoutes);
app.use("/api/entrada", entradaRoutes);
app.use("/api/salida", salidaRoutes);

app.use(errorHandler);


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Desde el puerto ${PORT} el backend`);
});