import TitleInfo from './components/TitleInfo'
import TableInfo from './components/TableInfo'
import Modal from '../../components/modal'

import { Card } from '@tremor/react'
import { useParams } from 'react-router-dom'
import { useVehiculo } from '../../hooks/useVehiculo'

export default function Vehiculo () {
  const { id } = useParams()
  const { vehiculo, loading, deleteVehiculo } = useVehiculo(id)

  return (
    <main className='p-24'>
      <Card className='p-10'>
        <TitleInfo vehiculo={vehiculo} deleteVehiculo={deleteVehiculo} />
        {
          loading
            ? <p>Cargando...</p>

            : <TableInfo vehiculo={vehiculo} />
        }
      </Card>
      <Modal />
    </main>
  )
}
