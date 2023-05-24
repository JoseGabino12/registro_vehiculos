import {
  Card,
  Title
} from '@tremor/react'

import { useState, useEffect } from 'react'
import TableInfo from './components/tabla'

export default function EntradaSalida () {
  const [dataEntrada, setDataEntrada] = useState([])
  const [dataSalida, setDataSalida] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/api/entrada')
      .then((response) => response.json())
      .then((data) => {
        setDataEntrada(data[0])
        setDataSalida(data[1])
        setLoading(false)
      })
  }, [])

  return (
    <Card>
      {
        loading
          ? <Title>Cargando...</Title>
          : <>
            <Title className='flex justify-between'>Entrada - Salida</Title>
            <TableInfo entrada={dataEntrada} salida={dataSalida} />
          </>
      }
    </Card>
  )
}
