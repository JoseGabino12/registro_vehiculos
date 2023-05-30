import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge
} from '@tremor/react'

export default function TableVehiculo ({ loading, fechasES }) {
  return (
    <>
      {
        loading
          ? <p>Cargando...</p>
          : <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>ID vehiculo</TableHeaderCell>
                <TableHeaderCell>Registro de entrada</TableHeaderCell>
                <TableHeaderCell>Registro de salida</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {
                fechasES.map((data) => (
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
      }
    </>
  )
}
