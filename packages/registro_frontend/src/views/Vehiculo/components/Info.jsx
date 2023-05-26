import { Text } from '@tremor/react'
import { useEffect, useState } from 'react'
import { CircleLoading } from '../../../assets/Circle'

export default function Info ({ vehiculo, postEntrada, postSalida, loading }) {
  const [statusVehiculo, setStatusVehiculo] = useState(null)

  const handleEntrada = async () => {
    if (statusVehiculo) {
      console.log('Entrada')
      postSalida(setStatusVehiculo)
    } else {
      console.log('Salida')
      postEntrada(setStatusVehiculo)
    }
  }

  useEffect(() => {
    setStatusVehiculo(vehiculo.status)
  }, [vehiculo.status])

  return (
    <div className='flex flex-row gap-5'>
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
        <div className='flex flex-col'>
          {
            loading
              ? <button type='button' disabled className={statusVehiculo ? 'bg-red-600 text-white rounded-lg justify-center flex items-center opacity-60' : 'bg-green-600 text-white rounded-lg flex justify-center items-center opacity-60'} onClick={handleEntrada}>
                 <CircleLoading />
              </button>
              : <button className={statusVehiculo ? 'bg-red-600 text-white rounded-lg p-2' : 'bg-green-600 text-white rounded-lg p-2'} onClick={handleEntrada}>
                {statusVehiculo ? 'Agregar salida' : 'Agregar entrada'}
              </button>
          }
        </div>
      </div>
    </div>
  )
}
