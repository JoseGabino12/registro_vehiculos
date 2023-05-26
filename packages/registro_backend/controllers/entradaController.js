import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const agregarEntrada = async (req, res, next) => {
    const { autoId} = req.body;
    const fecha = String(Date.now());

    try {
        await prisma.entrada.create({
            data: {
                fecha: fecha,
                autoId,
            }
        })
        return res.status(200);

    } catch (error) {
        next(error);
    }
}

const obtenerEntradas = async (req, res, next) => {

    try {
        const entradas = await prisma.entrada.findMany();
        return res.status(200).json(entradas);

    } catch (error) {
        next(error);
    }
};


const obtenerEntrada = async (req, res, next) => {
    const { id } = req.params;
    const autoId = Number(id);

    try {
        const entrada = await prisma.entrada.findUnique({
            where:{
                autoId: autoId
            }
        })
        return res.status(200).json(entrada);
    } catch (error) {
        next(error);
    }
}

const eliminarEntrada = async (req, res, next) => {
    try {
        await prisma.entrada.deleteMany({});
        return res.status(200);
    } catch (error) {
        next(error)
    }
}

export {
    agregarEntrada,
    obtenerEntradas,
    obtenerEntrada,
    eliminarEntrada
}