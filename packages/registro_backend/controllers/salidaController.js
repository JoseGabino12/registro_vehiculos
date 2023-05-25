import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const agregarSalida = async (req, res) => {
    const { id } = req.params;
    const { idEntrada } = req.body;
    let autoId = Number(id);
    const fecha = String(Date.now());

    console.log(idEntrada)
    try {
        const entrada = await prisma.entrada.findFirst({
            where: {
                id: idEntrada
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
    const autoId = Number(id);

    const salida = await prisma.salida.findUnique({
        where:{
            id: autoId
        }
    })
    res.json(salida);
}

const eliminarSalidas = async (req, res) => {
    const salidas = await prisma.salida.deleteMany({});

    res.json(salidas);
}

export {
    agregarSalida,
    obtenerSalidas,
    obtenerSalida,
    eliminarSalidas
}