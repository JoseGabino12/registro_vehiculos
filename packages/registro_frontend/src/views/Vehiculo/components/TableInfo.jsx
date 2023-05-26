import Info from './Info'
import TableVehiculo from './TableVehiculo'
import { useEntradaSalida } from '../../../hooks/useEntradaSalida'

export default function TableInfo ({ vehiculo }) {
  const { postEntrada, postSalida, loading, fechasES } = useEntradaSalida(vehiculo.id)

  return (
    <div className='grid gap-4 grid-flow-col p-10'>
      <Info vehiculo={vehiculo} postEntrada={postEntrada} postSalida={postSalida} loading={loading} />
      <TableVehiculo loading={loading} fechasES={fechasES} />
    </div>
  )
}
