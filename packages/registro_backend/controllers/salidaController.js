import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


// const agregarSalida = async (req, res, next) => {
//     const { idEntrada } = req.body;
//     const fecha = String(Date.now());
    
//     const { id } = req.params;
//     let autoId = Number(id);

//     if(isNaN(autoId)) {
//         return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
//     }

//     try {
//         const entrada = await prisma.entrada.findFirst({
//             where: {
//                 id: idEntrada
//             }
//         })

//         if(entrada === null) {
//             throw new Error("No hay una entrada asociada a este automovil");
//         }

//         await prisma.salida.create({
//             data: {
//                 fecha,
//                 autoId,
//                 entradaId: entrada.id
//             }
//         })
//         return res.status(200);

//     } catch (error) {
//         next(error);
//     }
// }

// const obtenerSalidas = async (req, res, next) => {
//     try {
//         const salidas= await prisma.salida.findMany();
//         res.status(200).json(salidas);
//     } catch (error) {
//         next(error)
//     }
// };

// const obtenerSalida = async (req, res, next) => {
//     const { id } = req.params;
//     const autoId = Number(id);

//     if(isNaN(autoId)) {
//         return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
//     }

//     try {

//         const salida = await prisma.salida.findFirst({
//             where:{
//                 autoId,
//             }
//         })
//         res.json(salida); 
//     } catch (error) {
//         next(error);
//     }
// }


// Falta aqui ver la logica
const modificarSalida = async (req, res, next) => {
    const fecha = new Date.now();
        const { id } = req.params;
        let autoId = Number(id);
    
    try {
        const salidaModificada = await prisma.salida.update({
            where: {
                autoId,
            },
            data: {fecha}
        })

        return res.status(201).json({msg: `La salida se ha modificado exitosamente`})
    } catch (error) {
        next(error)
    }

    return 
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
    // obtenerSalidas,
    // obtenerSalida,
    eliminarSalidas,
    modificarSalida
}