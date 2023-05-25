import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge
} from '@tremor/react'
import { useEffect, useState } from 'react'

export default function TableVehiculo ({ loading, entradaSalida }) {
  const [entrada, setEntrada] = useState()
  const [salida, setSalida] = useState()
  const { io } = entradaSalida

  useEffect(() => {
    if (!loading) {
      const entradas = io[0].entradas
      const salidas = io[1].salidas

      if (entradas === null || salidas === null) return

      const fechaE = new Date(Number(entradas.fecha))
      const horaE = fechaE.toUTCString()
      const fechaS = new Date(Number(salidas.fecha))
      const horaS = fechaS.toUTCString()

      setEntrada(horaE)
      setSalida(horaS)
    }
  }, [loading, io, entradaSalida])

  return (
    <>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Registro de salida</TableHeaderCell>
          <TableHeaderCell>Registro de entrada</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow>
            <TableCell>
              <Badge color="emerald">
                {
                  salida === undefined ? 'No hay registros' : salida
                }
              </Badge>
            </TableCell>
            <TableCell>
              <Badge color="emerald">
                {
                  entrada === undefined ? 'No hay registros' : entrada
                }
              </Badge>
            </TableCell>
          </TableRow>
      </TableBody>
    </Table>
    </>
  )
}
