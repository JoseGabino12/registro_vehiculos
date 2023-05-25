import { Text } from '@tremor/react'
import { useEffect, useState } from 'react'

export default function Info ({ vehiculo }) {
  const [entrada, setEntrada] = useState(null)

  const handleEntrada = async () => {
    await fetch(`http://localhost:4000/api/auto/${vehiculo.id}`, {
      method: 'PUT'
    })
      .then((response) => response.json())
      .then((data) => {
        setEntrada(data.status)
      })
  }

  useEffect(() => {
    setEntrada(vehiculo.status)
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
        <button className={entrada ? 'bg-green-600 text-white rounded-lg p-2' : 'bg-red-600 text-white rounded-lg p-2'} onClick={handleEntrada}>
          {entrada ? 'Agregar entrada' : 'Agregar salida'}
        </button>
      </div>
      </div>
    </div>
  )
}
