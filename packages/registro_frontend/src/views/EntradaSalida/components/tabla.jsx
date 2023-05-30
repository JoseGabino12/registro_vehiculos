import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge
} from '@tremor/react'

export default function TableInfo ({ entrada, salida }) {
  const { entradas } = entrada
  const { salidas } = salida
  const data = entradas.map(entradaItem => {
    const salidaItem = salidas.find(salidaItem => salidaItem.entradaId === entradaItem.id)

    if (salidaItem !== undefined) {
      console.log(salidaItem)
      console.log(entradaItem)
      const fechaE = new Date(Number(entradaItem.fecha))
      const horaE = fechaE.toUTCString()
      const fechaS = new Date(Number(salidaItem.fecha))
      const horaS = fechaS.toUTCString()
      return {
        id: entradaItem.id,
        fechaEntrada: horaE,
        fechaSalida: salidaItem ? horaS : null,
        autoId: entradaItem.autoId
      }
    } else {
      const fechaE = new Date(Number(entradaItem.fecha))
      const horaE = fechaE.toUTCString()

      return {
        id: entradaItem.id,
        fechaEntrada: horaE,
        fechaSalida: null,
        autoId: entradaItem.autoId
      }
    }
  })

  return (
    <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Número económico</TableHeaderCell>
            <TableHeaderCell>Entrada</TableHeaderCell>
            <TableHeaderCell>Salida</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {
                data.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>
                      <Badge color="emerald">
                        {data.id}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge color="emerald">
                        {data.fechaEntrada}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge color="red">
                        {data.fechaSalida}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              }
        </TableBody>
      </Table>
  )
}
