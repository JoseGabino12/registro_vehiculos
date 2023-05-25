import { Text } from '@tremor/react'
import { useEffect, useState } from 'react'

export default function Info ({ vehiculo }) {
  const [statusVehiculo, setStatusVehiculo] = useState(null)
  const [idEntrada, setIdEntrada] = useState(null)
  console.log(vehiculo.status)

  const handleEntrada = async () => {
    console.log(statusVehiculo)
    if (statusVehiculo) {
      await fetch(`http://localhost:4000/api/salida/${vehiculo.id}`, {
        method: 'POST',
        body: JSON.stringify({ autoId: vehiculo.id, idEntrada }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          // vehiculo.status ? setSalida(data.fecha) : setEntrada(data.fecha)
        })
    } else {
      await fetch(`http://localhost:4000/api/entrada/${vehiculo.id}`, {
        method: 'POST',
        body: JSON.stringify({ autoId: vehiculo.id }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setIdEntrada(data.id)
        })
    }

    await fetch(`http://localhost:4000/api/auto/${vehiculo.id}`, {
      method: 'PUT'
    })
      .then((response) => response.json())
      .then((data) => {
        setStatusVehiculo(data.status)
      })
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
        <button className={statusVehiculo ? 'bg-red-600 text-white rounded-lg p-2' : 'bg-green-600 text-white rounded-lg p-2'} onClick={handleEntrada}>
          {statusVehiculo ? 'Agregar salida' : 'Agregar entrada'}
        </button>
      </div>
      </div>
    </div>
  )
}
