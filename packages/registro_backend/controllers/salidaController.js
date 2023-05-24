import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const agregarSalida = async (req, res) => {
    const { id } = req.params;
    let autoId = Number(id);
    const fecha = String(Date.now());

    try {
        const entrada = await prisma.entrada.findFirst({
            where: {
                autoId
            }
        })

        if(entrada != null) {
                const nuevaSalida = await prisma.salida.create({
                 data: {
                     fecha,
                     autoId,
                     entradaId: entrada.id
                 }
             })
             return res.json(nuevaSalida);
        } else {
            return res.status(403).json({msg: "No hay una entrada asociada a este automovil"});
        }

    } catch (error) {
        console.log(error);
    }
}

const obtenerSalidas = async (req, res) => {
    const salida = await prisma.salida.findMany();
    res.json(salida);
};

const obtenerSalida = async (req, res) => {
    const { id } = req.params;

    const salida = await prisma.salida.findUnique({
        where:{
            id
        }
    })
    res.json(salida);
}

export {
    agregarSalida,
    obtenerSalidas,
    obtenerSalida
}