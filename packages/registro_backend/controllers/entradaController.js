import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
import generateUUID from "../helpers/transaccionId.js";


const agregarEntrada = async (req, res, next) => {
    const { autoId } = req.body;
    const fecha = String(Date.now());
    const transaccionId = generateUUID();

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil con ese id`});
    }

    try {
        const nuevaEntrada = await prisma.entrada.create({
            data: {
                fecha,
                autoId,
                transaccionId
            }
        })

        const nuevaSalida = await prisma.salida.create({
            data: {
                fecha: "",
                autoId,
                transaccionId
            }
        });

        return res.status(201).json({msg: `Se ha agregado una nueva entrada al auto con id ${autoId}`});
    } catch (error) {
        next(error);
    }
}


const eliminarEntradas = async (req, res, next) => {
    try {
        const entradasEliminado = await prisma.entrada.deleteMany({});
        return res.status(200).json({msg: `Se ha eliminado con exito las entradas`});
    } catch (error) {
        next(error)
    }
}

export {
    agregarEntrada,
    eliminarEntradas
}