import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const obtenerAutos = async (req, res) => {
    const autos = await prisma.auto.findMany();

    res.json(autos);
};

const agregarAuto = async (req, res) => {
    const {marca, anio, modelo, empresa, numeconomico, imagen} = req.body;
    console.log(req.body);

    try {
        const nuevoAuto = await prisma.auto.create({
            data: {
                marca,
                anio,
                modelo,
                empresa,
                numeconomico,
                imagen
            }
        })

        res.json(nuevoAuto);
    } catch (error) {
        console.log(error);
    }
}

const obtenerAuto = async (req, res) => {
    const { id } = req.params;
    let idAuto = Number(id);

    try {
        const auto = await prisma.auto.findUnique({
            where:{
                id: idAuto
            }
        })
        res.json(auto);  
    } catch (error) {
        res.status(404).json({msg: "No se encontro el auto"})
    }
}

const actualizarStatusAuto = async (req, res) => {
    const { id } = req.params;
    let idAuto = Number(id);

    let auto = await prisma.auto.findUnique({
        where:{
            id: idAuto
        }
    })

    if(!auto) {
        const error = new Error("No se encontro el producto")
        res.status(403).json({msg: error.message});
    }

    try {
        let { status } = auto;

        if(status === false ) {
            status = true
        } else {
            status = false
        }

        const autoActualizado = await prisma.auto.update({
            where: {
                id: idAuto
            },
            data: {
                status
            }
        })

        res.json(autoActualizado);

    } catch (error) {
        console.log(error);
    }
}

const eliminarAuto = async (req, res) => {
    const { id } = req.params;
    const autoId = Number(id);
    const auto = await prisma.auto.findUnique({
        where:{
            id: autoId
        }
    })

    if(!auto) {
        const error = new Error("No se encontro el auto")
        res.status(403).json({msg: error.message});
    }

    try {
        const autoEliminado = await prisma.auto.delete({
            where: {
                id: autoId
            }
        })
        res.json(autoEliminado);
    } catch (error) {
        console.log(error);
    }
}


export {
    obtenerAutos,
    agregarAuto,
    obtenerAuto,
    eliminarAuto,
    actualizarStatusAuto
}