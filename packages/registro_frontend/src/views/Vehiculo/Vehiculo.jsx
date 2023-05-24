import { Card } from '@tremor/react'
import Info from './components/Info'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Vehiculo () {
  const [vehiculo, setVehiculo] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/api/auto/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehiculo(data)
      })
  }, [id])

  return (
    <main>
      <Card>
      <div className='grid gap-4 grid-flow-col p-10'>
          <Info vehiculo={vehiculo} />
          {/* <TableVehiculo /> */}
        </div>
      </Card>
    </main>
  )
}
