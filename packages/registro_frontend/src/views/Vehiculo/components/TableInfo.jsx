import Info from './Info'
import TableVehiculo from './TableVehiculo'
import { useVehiculo } from '../../../hooks/useVehiculo'

export default function TableInfo ({ id }) {
  const { loadingVehiculos, vehiculo } = useVehiculo(id)

  return (
    <div className='grid md:grid-rows-1 md:grid-cols-2 grid-cols-1 grid-rows-2'>
      {
        loadingVehiculos
          ? <p>Cargando...</p>
          : <>
          <Info vehiculo={vehiculo} />
          <TableVehiculo id={id} />
        </>
      }
    </div>
  )
}
