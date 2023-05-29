import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const agregarEntrada = async (req, res, next) => {
    const { autoId } = req.body;
    const fecha = String(Date.now());

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil con ese id`});
    }

    try {
        const nuevaEntrada = await prisma.entrada.create({
            data: {
                fecha,
                autoId,
                salidaId: ""
            }
        })

        const nuevaSalida = await prisma.salida.create({
            data: {
                fecha: "",
                autoId,
                entradaId: nuevaEntrada.id
            }
        });

        // Lo hago aqui porque no puedo ponerle un valor a salidaId sin haber creado la salida.
        await prisma.entrada.update({
            where: {
                id: nuevaEntrada.id
            },
            data: {
                ...nuevaEntrada,
                salidaId: nuevaSalida.id
            }
        })

        return res.status(201).json({msg: `Se ha agregado una nueva entrada al auto con id ${autoId}`});

    } catch (error) {
        next(error);
    }
}

// const obtenerEntradas = async (req, res, next) => {

//     try {
//         const entradas = await prisma.entrada.findMany();
//         return res.status(200).json(entradas);

//     } catch (error) {
//         next(error);
//     }
// };


// const obtenerEntrada = async (req, res, next) => {
//     const { id } = req.params;
//     const autoId = Number(id);

//     if(isNaN(autoId)) {
//         return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
//     }

//     try {
//         const entrada = await prisma.entrada.findFirst({
//             where:{
//                 autoId
//             }
//         })
//         return res.status(200).json(entrada);
//     } catch (error) {
//         next(error);
//     }
// }

const eliminarEntradas = async (req, res, next) => {
    try {
        const autoEliminado = await prisma.entrada.deleteMany({});
        return res.status(200).json({msg: `Se ha eliminado con exito la entrada`});
    } catch (error) {
        next(error)
    }
}

export {
    agregarEntrada,
    eliminarEntradas
}