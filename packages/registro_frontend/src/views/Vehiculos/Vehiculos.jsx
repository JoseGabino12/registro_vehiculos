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
import { useVehiculos } from '../../hooks/useVehiculos'
import { SiAddthis } from 'react-icons/si'

export default function Vehículos () {
  const { vehiculos, loading } = useVehiculos()

  return (
    <Card>
      {
        loading
          ? <Title>Cargando...</Title>
          : <>
            <Title className='flex justify-between'>Registro de vehículos
              <Link to='/registrar_vehiculo'>
                <SiAddthis className='text-2xl text-green-500 hover:scale-110' />
              </Link>
            </Title>
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
          </>
      }
    </Card>
  )
}
