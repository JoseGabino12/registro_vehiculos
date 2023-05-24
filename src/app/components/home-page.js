'use client'
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge
} from '@tremor/react'
import Link from 'next/link'

export default function Vehículos () {
  return (
    <Card>
      <Title className='flex justify-between'>Registro de vehículos <Link href='/registro/vehiculo' className='text-sm bg-green-200 p-2 rounded-md hover:bg-green-500 hover:text-white hover:scale-110 transition duration-150 ease-in-out'>Agregar +</Link></Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Imagen</TableHeaderCell>
            <TableHeaderCell>Marca</TableHeaderCell>
            <TableHeaderCell>Modelo</TableHeaderCell>
            <TableHeaderCell>Año</TableHeaderCell>
            <TableHeaderCell>Empresa</TableHeaderCell>
            <TableHeaderCell>Número económico</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>Toyota</TableCell>
              <TableCell>
                <Text>Hola</Text>
              </TableCell>
              <TableCell>
                <Text>Hola2</Text>
              </TableCell>
              <TableCell>
                <Text>Hola2</Text>
              </TableCell>
              <TableCell>
                <Text>Hola2</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald">
                  hola
                </Badge>
              </TableCell>
              <TableCell>
                <Link href='/vehiculos/2'>
                  <p className='opacity-25 hover:opacity-100 transition duration-150 ease-in-out'>
                    Ver más...
                  </p>
                </Link>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
