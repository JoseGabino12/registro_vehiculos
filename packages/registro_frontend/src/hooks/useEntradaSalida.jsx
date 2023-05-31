import { useState, useEffect } from 'react'

export function useEntradaSalida (id) {
  const [fechasES, setFechasES] = useState([])
  const [loading, setLoading] = useState(true)

  const putStatus = async (setStatusVehiculo) => {
    await fetch(`http://localhost:4000/api/auto/status/${id}`, {
      method: 'PUT'
    })
      .then((response) => response.json())
      .then((data) => {
        setStatusVehiculo(data.status)
        setLoading(false)
      })
  }

  const postSalida = async (setStatusVehiculo) => {
    setLoading(true)
    await fetch(`http://localhost:4000/api/salida/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ autoId: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.removeItem('idEntrada')
        putStatus(setStatusVehiculo)
      })
  }

  const postEntrada = async (setStatusVehiculo) => {
    setLoading(true)
    await fetch(`http://localhost:4000/api/entrada/${id}`, {
      method: 'POST',
      body: JSON.stringify({ autoId: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        putStatus(setStatusVehiculo)
      })
  }

  const fechasEntradaSalida = (entrada, salida) => {
    const data = entrada.map(entradaItem => {
      const salidaItem = salida.find(salidaItem => salidaItem.transaccionId === entradaItem.transaccionId)

      if (salidaItem.fecha !== '') {
        const fechaE = new Date(Number(entradaItem.fecha))
        const horaE = fechaE.toLocaleString('es-MX', { hour12: true })
        const fechaS = new Date(Number(salidaItem.fecha))
        const horaS = fechaS.toLocaleString('es-MX', { hour12: true })
        return {
          id: entradaItem.id,
          fechaEntrada: horaE,
          fechaSalida: salidaItem ? horaS : null,
          autoId: entradaItem.autoId
        }
      } else {
        const fechaE = new Date(Number(entradaItem.fecha))
        const horaE = fechaE.toLocaleString('es-MX', { hour12: true })

        return {
          id: entradaItem.id,
          fechaEntrada: horaE,
          fechaSalida: null,
          autoId: entradaItem.autoId
        }
      }
    })

    return data
  }

  useEffect(() => {
    async function fetching () {
      await fetch(`http://localhost:4000/api/entrada/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setFechasES(fechasEntradaSalida(data[0].entradas, data[1].salidas))
          setLoading(false)
        })
    }

    fetching()
  }, [id])

  return {
    fechasES,
    loading,
    postEntrada,
    postSalida
  }
}
