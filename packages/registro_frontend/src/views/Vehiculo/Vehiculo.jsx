import { Card } from '@tremor/react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Info from './components/Info'
import TableVehiculo from './components/Table-info'
import TitleInfo from './components/TitleInfo'

export default function Vehiculo () {
  const [vehiculo, setVehiculo] = useState({})
  const [entradaSalida, setEntradaSalida] = useState([{}])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/api/auto/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehiculo(data)
      })
  }, [id])

  useEffect(() => {
    fetch(`http://localhost:4000/api/entrada/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEntradaSalida(data)
        setLoading(false)
      })
  }, [id, entradaSalida])

  return (
    <main className='p-24'>
      <Card>
        <TitleInfo vehiculo={vehiculo} />
        <div className='grid gap-4 grid-flow-col p-10'>
          <Info vehiculo={vehiculo} />
          <TableVehiculo loading={loading} entradaSalida={entradaSalida} />
        </div>
      </Card>
    </main>
  )
}
