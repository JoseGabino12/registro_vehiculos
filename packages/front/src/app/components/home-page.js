import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title
} from '@tremor/react'
import Link from 'next/link'

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:4000/api/auto')
  const data = await res.json()

  console.log('desde server', res)

  return {
    props: {
      data
    }
  }
}

export default function Vehículos ({ data }) {
  console.log(data)
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
            {/* {
              vehiculos.map((vehiculo) => (
                <TableRow key={vehiculo.id}>
                  <TableCell>
                    <img src={vehiculo.imagen} alt={vehiculo.marca} className='w-20 h-20 rounded-md' />
                  </TableCell>
                  <TableCell>
                    <Text>{vehiculo.marca}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{vehiculo.modelo}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{vehiculo.anio}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{vehiculo.empresa}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{vehiculo.numeconomico}</Text>
                  </TableCell>
                </TableRow>
              ))
            } */}
        </TableBody>
      </Table>
    </Card>
  )
}
