import { useState, useEffect } from 'react'

export function useVehiculo (id) {
  const [vehiculo, setVehiculo] = useState({})
  const [loadingVehiculos, setLoadingVehiculos] = useState(true)

  const deleteVehiculo = async () => {
    await fetch(`http://localhost:4000/api/auto/${vehiculo.id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }

  useEffect(() => {
    if (id !== undefined) {
      fetch(`http://localhost:4000/api/auto/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setVehiculo(data)
          setLoadingVehiculos(false)
        })
    }
  }, [id])

  return {
    deleteVehiculo,
    vehiculo,
    loadingVehiculos
  }
}
