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
    }
  }, [loading, io])

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
