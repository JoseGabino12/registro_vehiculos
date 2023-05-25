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
  const data = entrada.entradas.map(entradaItem => {
    const salidaItem = salida.salidas.find(salidaItem => salidaItem.entradaId === entradaItem.id)
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
                      <Badge color="emerald">
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
