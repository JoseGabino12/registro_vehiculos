import TitleInfo from './components/TitleInfo'
import TableInfo from './components/TableInfo'

import { Card } from '@tremor/react'
import { useParams } from 'react-router-dom'
import { useVehiculo } from '../../hooks/useVehiculo'

export default function Vehiculo () {
  const { id } = useParams()
  const { vehiculo, loading } = useVehiculo(id)

  return (
    <main className='p-24'>
      <Card>
        <TitleInfo vehiculo={vehiculo} />
        {
          loading
            ? <p>Cargando...</p>

            : <TableInfo vehiculo={vehiculo} />
        }
      </Card>
    </main>
  )
}
