'use client'
import { Text } from '@tremor/react'
import { useState } from 'react'

export default function Info () {
  const [entrada, setEntrada] = useState(false)

  const handleEntrada = () => {
    setEntrada(!entrada)
  }
  return (
    <div className='flex flex-col gap-3'>
      <Text>
        <strong>Marca:</strong> Toyota
      </Text>
      <Text>
        <strong>Modelo:</strong> Corolla
      </Text>
      <Text>
        <strong>Año:</strong> 2016
      </Text>
      <Text>
        <strong>Empresa:</strong> Toyota
      </Text>
      <Text>
        <strong>Número económico:</strong> 1234
      </Text>
      <div className='flex flex-col'>
        {
          entrada
            ? (
              <button className='bg-green-600 text-white rounded-lg p-2 w-1/3' onClick={handleEntrada}>Agregar salida</button>
              )
            : (
              <button className='bg-green-600 text-white rounded-lg p-2 w-1/3' onClick={handleEntrada}>Agregar entrada</button>
              )
        }
      </div>
    </div>
  )
}
