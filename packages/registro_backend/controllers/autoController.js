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
        const autoExistente = await prisma.auto.findFirst({
            where: { numeconomico: numeconomico }
        });

        if(autoExistente.id) {
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

        return res.status(201).json({msg: `El auto con numero economico ${nuevoAuto.numeconomico} se ha agregado con exito`});

    } catch (error) {
        next(error);
    }
}

const obtenerAuto = async (req, res, next) => {
    const { id } = req.params;
    let autoId = Number(id);

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
    }

    try {
        const auto = await prisma.auto.findFirst({
            where:{
                id: autoId
            }
        })  

        if(!auto) {
            throw new Error("No se encontro el auto");
        }

        return res.status(200).json(auto);
    } catch (error) {
        next(error);
    }
}

const actualizarAuto = async (req, res, next) => {
    const { id } = req.params;
    let autoId = Number(id);
    const { marca, anio, modelo, empresa, numeconomico, imagen } = req.body;

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
    }

    try {
        let auto = await prisma.auto.findFirst({ where:{ id: autoId }});

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
                id: autoId
            },
            data: auto
        })

        return res.status(201).json({msg: `El auto ha sido actualizado exitosamente`});
    } catch (error) {
        next(error);
    }
}

const eliminarAuto = async (req, res, next) => {
    const { id } = req.params;
    const autoId = Number(id);

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
    }

    try {
        const auto = await prisma.auto.findFirst({ where:{ id: autoId }});
    
        if(!auto) {
            throw new Error("No se encontro el auto");
        }

        await prisma.auto.delete({
            where: {
                id: autoId
            }
        });

        return res.status(200).json({msg: `El auto con numero economico ${auto.numeconomico} ha sido eliminado exitosamente`});
    } catch (error) {
        next(error);
    }
}

const setStatus = async (req, res, next) => {
    const { id } = req.body;
    let autoId = Number(id);

    if(isNaN(autoId)) {
        return res.status(400).json({msg: `No existe un automovil que coincida con su busqueda`});
    }

    try {

        const auto = await prisma.auto.findFirst({
            where:{
                id: autoId
            }
        })  

        if(!auto) {
            throw new Error("No se encontro el auto");
        }

        const autoActualizado = await prisma.auto.update({
            where: {
                id: auto.id
            },
            data: {
                status: !auto.status
            }
        })

        return res.status(201).json({msg: `El status se ha actualizado correctamente`});
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