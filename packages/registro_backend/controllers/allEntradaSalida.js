import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const AllEntradasSalidas = async (req, res, next) => {

    try {
        const entradas = await prisma.entrada.findMany({});
        const salidas = await prisma.salida.findMany({});
        const io = [{entradas: entradas}, {salidas: salidas}];

        return res.status(200).json(io);
    } catch (error) {
        next(error);
    }

}

const allEntradasSalidasById = async (req, res, next) => {
    const { id } = req.params;
    const idNumber = Number(id);

    try {
        const entradas = await prisma.entrada.findMany({
            where:{
                autoId: idNumber
            }
        })
        const salidas = await prisma.salida.findMany({
            where:{
                autoId: idNumber
            }
        })

        const io = [{entradas: entradas}, {salidas: salidas}];
        res.json({io})
    } catch (error) {
        next(error);
    }

}

export {
    AllEntradasSalidas,
    allEntradasSalidasById
}