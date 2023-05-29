import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const allEntradasSalidas = async (req, res, next) => {

    try {
        const entradas = await prisma.entrada.findMany();
        const salidas = await prisma.salida.findMany();
        const io = [{entradas}, {salidas}];

        return res.status(200).json(io);
    } catch (error) {
        next(error);
    }

}

const allEntradasSalidasById = async (req, res, next) => {
    const { id } = req.params;
    const autoId = Number(id);

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
    }

    try {
        const entradas = await prisma.entrada.findMany({
            where: {
                autoId
            }
        })
        const salidas = await prisma.salida.findMany({
            where: {
                autoId
            }
        })

        const io = [{entradas}, {salidas}];
        res.json(io)
    } catch (error) {
        next(error);
    }

}

export {
    allEntradasSalidas,
    allEntradasSalidasById
}