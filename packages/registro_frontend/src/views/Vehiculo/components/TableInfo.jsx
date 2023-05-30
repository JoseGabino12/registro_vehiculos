import Info from './Info'
import TableVehiculo from './TableVehiculo'
import { useEntradaSalida } from '../../../hooks/useEntradaSalida'

export default function TableInfo ({ vehiculo }) {
  const { postEntrada, postSalida, loading, fechasES } = useEntradaSalida(vehiculo.id)

  return (
    <div className='grid md:grid-rows-1 md:grid-cols-2 grid-cols-1 grid-rows-2'>
      <Info vehiculo={vehiculo} postEntrada={postEntrada} postSalida={postSalida} loading={loading} />
      <TableVehiculo loading={loading} fechasES={fechasES} />
    </div>
  )
}
