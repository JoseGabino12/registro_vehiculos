import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const agregarEntrada = async (req, res) => {
    const { autoId} = req.body;

    const fecha = String(Date.now());

    try {
        const nuevaEntrada = await prisma.entrada.create({
            data: {
                fecha: fecha,
                autoId: autoId,
            }
        })
        res.json(nuevaEntrada);

    } catch (error) {
        console.log(error);
    }
}

const obtenerEntradas = async (req, res) => {
    const entrada = await prisma.entrada.findMany();
    res.json(entrada);
};


const obtenerEntrada = async (req, res) => {
    const { id } = req.params;

    const entrada = await prisma.entrada.findUnique({
        where:{
            autoId: id
        }
    })
    res.json(entrada);
}

export {
    agregarEntrada,
    obtenerEntradas,
    obtenerEntrada
}