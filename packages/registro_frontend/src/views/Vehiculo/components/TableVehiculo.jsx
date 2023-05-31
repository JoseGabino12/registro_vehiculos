import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge
} from '@tremor/react'

import { useEntradaSalida } from '../../../hooks/useEntradaSalida'

export default function TableVehiculo ({ id }) {
  const { loading, fechasES } = useEntradaSalida(id)
  return (
    <>
      {
        loading
          ? <p>Cargando...</p>
          : <Table>
            <TableHead>
              <TableRow>
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
