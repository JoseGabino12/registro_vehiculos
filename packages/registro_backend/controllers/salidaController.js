import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const agregarSalida = async (req, res, next) => {
    const { id } = req.params;
    const { idEntrada } = req.body;
    let autoId = Number(id);
    const fecha = String(Date.now());

    try {
        const entrada = await prisma.entrada.findFirst({
            where: {
                id: idEntrada
            }
        })

        if(entrada === null) {
            throw new Error("No hay una entrada asociada a este automovil");
        }

        await prisma.salida.create({
            data: {
                fecha,
                autoId,
                entradaId: entrada.id
            }
        })
        return res.status(200);

    } catch (error) {
        next(error);
    }
}

const obtenerSalidas = async (req, res, next) => {
    try {
        const salidas= await prisma.salida.findMany();
        res.status(200).json(salidas);
    } catch (error) {
        next(error)
    }
};

const obtenerSalida = async (req, res, next) => {
    const { id } = req.params;
    const autoId = Number(id);

    try {
        const salida = await prisma.salida.findMany({
            where:{
                id: autoId
            }
        })
        res.json(salida); 
    } catch (error) {
        next(error);
    }
}

const eliminarSalidas = async (req, res, next) => {

    try {
        await prisma.salida.deleteMany({});
        res.status(200);
    } catch (error) {
        next(error);
    }
}

export {
    agregarSalida,
    obtenerSalidas,
    obtenerSalida,
    eliminarSalidas
}