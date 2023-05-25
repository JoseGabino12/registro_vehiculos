import { Text } from '@tremor/react'
import { useState } from 'react'

export default function Info ({ vehiculo }) {
  const [entrada, setEntrada] = useState(false)

  const handleEntrada = () => {
    setEntrada(!entrada)
  }
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
          entrada
            ? (
              <button className='bg-green-600 text-white rounded-lg p-2' onClick={handleEntrada}>Agregar salida</button>
              )
            : (
              <button className='bg-green-600 text-white rounded-lg p-2' onClick={handleEntrada}>Agregar entrada</button>
              )
        }
      </div>
      </div>
    </div>
  )
}
