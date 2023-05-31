import { Text } from '@tremor/react'
import { CircleLoading } from '../../../assets/Circle'
import { FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useEntradaSalida } from '../../../hooks/useEntradaSalida'

export default function Info ({ vehiculo }) {
  const { postEntrada, postSalida, loading } = useEntradaSalida(vehiculo.id)
  const [statusVehiculo, setStatusVehiculo] = useState(false)

  const handleEntrada = async () => {
    if (statusVehiculo) {
      postSalida(setStatusVehiculo)
    } else {
      postEntrada(setStatusVehiculo)
    }
  }

  useEffect(() => {
    setStatusVehiculo(vehiculo.status)
  }, [vehiculo.status])

  return (
    <div className='flex flex-row gap-5 items-center p-5'>
      <img src={vehiculo.imagen} className='h-52 w-auto bg-cover' alt='Carro Mazda 3' />
      <div className='flex flex-col gap-3'>
        <Text>
          <strong>Marca:</strong> {vehiculo.marca}
        </Text>
        <Text>
          <strong>Modelo:</strong> {vehiculo.modelo}
        </Text>
        <Text>
          <strong>Año:</strong> {vehiculo.anio}
        </Text>
        <Text>
          <strong>Empresa:</strong> {vehiculo.empresa}
        </Text>
        <Text>
          <strong>Número económico:</strong> {vehiculo.numeconomico}
        </Text>
        <div className='flex flex-row gap-3'>
          <Link to={`/editar_vehiculo/${vehiculo.id}`} className='bg-blue-500 text-white p-2 rounded-lg hover:scale-110'>
            <FiEdit className='text-xl' />
          </Link>
          {
            loading
              ? <button type='button' disabled className={statusVehiculo ? 'bg-red-600 text-white rounded-lg justify-center flex items-center opacity-60' : 'bg-green-600 text-white rounded-lg flex justify-center items-center opacity-60'} onClick={handleEntrada}>
                 <CircleLoading classCircle='w-7 h-7 animate-spin text-white' />
              </button>
              : <button className={statusVehiculo ? 'bg-red-600 text-white rounded-lg p-2 text-sm hover:sacle-110' : 'bg-green-600 text-white rounded-lg p-2 text-sm hover:scale-110'} onClick={handleEntrada}>
                {statusVehiculo ? 'Agregar salida' : 'Agregar entrada'}
              </button>
          }
        </div>
      </div>
    </div>
  )
}
