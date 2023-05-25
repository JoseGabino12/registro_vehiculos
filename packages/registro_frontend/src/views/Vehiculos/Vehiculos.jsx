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

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Vehículos () {
  const [vehiculos, setVehiculos] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/auto')
      .then((response) => response.json())
      .then((data) => setVehiculos(data))
  }, [])

  return (
    <Card>
      <Title className='flex justify-between'>Registro de vehículos <Link className='text-sm bg-green-200 p-2 rounded-md hover:bg-green-500 hover:text-white hover:scale-110 transition duration-150 ease-in-out' to='/registrar_vehiculo'>Agregar +</Link></Title>
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
            {
              vehiculos.map((vehiculo) => (
                <TableRow key={vehiculo.id}>
                  <TableCell>
                    <img src={vehiculo.imagen} alt={vehiculo.marca} className='w-auto h-52 bg-cover rounded-md' width={20} height={20} />
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
                  <TableCell>
                    <Link to={`/vehiculos/${vehiculo.id}`}>
                      <p className='opacity-25 hover:opacity-100 transition duration-150 ease-in-out'>
                        Ver más...
                      </p>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            }
        </TableBody>
      </Table>
    </Card>
  )
}
