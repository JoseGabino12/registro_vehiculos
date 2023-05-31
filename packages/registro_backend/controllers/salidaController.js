import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const modificarSalida = async (req, res, next) => {
    const fecha = String(Date.now());
    let autoId = Number(req.body.autoId);

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil con ese id`});
    }

    try {
        const transaccionesAuto = await prisma.salida.findMany({
            where: {
                autoId: autoId
            }
        });

        const salidaModificada = await prisma.salida.update({
            where: {
                id: transaccionesAuto[transaccionesAuto.length - 1].id
            },
            data: {
                fecha
            }
        })

        res.status(201).json({msg: `Se ha agregado la hora de salida correctamente`})
    } catch (error) {
        next(error)
    }

    next();
}

const eliminarSalidas = async (req, res, next) => {
    try {
       const salidasEliminadas = await prisma.salida.deleteMany({});
        return res.status(200).json({msg: `Todas las salidas han sido eliminadas correctamente`});
    } catch (error) {
        next(error);
    }
}

export {
    modificarSalida,
    eliminarSalidas
}