import { Card } from '@tremor/react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Info from './components/Info'
import TableVehiculo from './components/Table-info'
import TitleInfo from './components/TitleInfo'

export default function Vehiculo () {
  const [vehiculo, setVehiculo] = useState({})
  const [dataEntrada, setDataEntrada] = useState([])
  const [dataSalida, setDataSalida] = useState([])
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
    async function fetching () {
      await fetch(`http://localhost:4000/api/entrada/${id}`)
        .then((response) => response.json())
        .then((data) => {
          const { io } = data
          setDataEntrada(io[0].entradas)
          setDataSalida(io[1].salidas)

          setLoading(false)
        })
    }

    fetching()
  }, [id])

  console.log(dataEntrada, dataSalida)

  return (
    <main className='p-24'>
      <Card>
        <TitleInfo vehiculo={vehiculo} />
        <div className='grid gap-4 grid-flow-col p-10'>
          <Info vehiculo={vehiculo} />

          {
            loading
              ? <h1>Cargando...</h1>
              : <TableVehiculo loading={loading} entrada={dataEntrada} salida={dataSalida} />
          }
        </div>
      </Card>
    </main>
  )
}
