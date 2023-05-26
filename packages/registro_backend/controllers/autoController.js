import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const obtenerAutos = async (req, res, next) => {

    try {
        const autos = await prisma.auto.findMany();
        return res.status(200).json(autos);
    } catch (error) {
        next(error)
    }
};

const agregarAuto = async (req, res, next) => {
    const {marca, anio, modelo, empresa, numeconomico, imagen} = req.body;

    try {
        const autoExistente = await prisma.auto.findUnique({
            where: { numeconomico: numeconomico }
        });

        if(autoExistente) {
            throw new Error("Ya existe un vehiculo con ese numero economico");
        }

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

        return res.status(200);
    } catch (error) {
        next(error);
    }
}

const obtenerAuto = async (req, res, next) => {
    const { id } = req.params;
    let idAuto = Number(id);

    try {
        const auto = await prisma.auto.findUnique({
            where:{
                id: idAuto
            }
        })  

        if(!auto) {
            throw new Error("No se encontro el auto");
        }

        return res.json(auto);
    } catch (error) {
        next(error);
    }
}

const actualizarAuto = async (req, res, next) => {
    const { id } = req.params;
    let idAuto = Number(id);
    const { marca, anio, modelo, empresa, numeconomico, imagen } = req.body;

    try {
        let auto = await prisma.auto.findUnique({ where:{ id: idAuto }});

        if(!auto) {
            throw new Error("No se encontro el auto");
        }

        auto.marca = marca || auto.marca;
        auto.anio = anio || auto.anio;
        auto.modelo = modelo || auto.modelo;
        auto.empresa = empresa || auto.empresa;
        auto.numeconomico = numeconomico || auto.numeconomico;
        auto.imagen = imagen || auto.imagen;

        await prisma.auto.update({
            where: {
                id: idAuto
            },
            data: auto
        })

        return res.status(200);
    } catch (error) {
        next(error);
    }
}

const eliminarAuto = async (req, res, next) => {
    const { id } = req.params;
    const autoId = Number(id);

    try {
        const auto = await prisma.auto.findUnique({ where:{ id: autoId }});
    
        if(!auto) {
            throw new Error("No se encontro el auto");
        }

        await prisma.auto.delete({
            where: {
                id: autoId
            }
        });

        return res.status(200);
    } catch (error) {
        next(error);
    }
}


export {
    obtenerAutos,
    agregarAuto,
    obtenerAuto,
    eliminarAuto,
    actualizarAuto
}