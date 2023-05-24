import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


const AllEntradasSalidas = async (req, res) => {
    const entradas = await prisma.entrada.findMany();
    const salidas = await prisma.salida.findMany();

    const io = [{entradas: entradas}, {salidas: salidas}];

    return res.json(io);

}

const allEntradasSalidasById = async (req, res) => {
  const { id } = req.params;
  const entradas = await prisma.salida.findUnique({
      where:{
          id
      }
  })
  const salidas = await prisma.salida.findUnique({
      where:{
          id
      }
  })

  const io = [{entradas: entradas}, {salidas: salidas}];
  res.json({io})

}

export {
    AllEntradasSalidas,
    allEntradasSalidasById
}