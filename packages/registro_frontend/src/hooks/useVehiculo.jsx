import { useState, useEffect } from 'react'

export function useVehiculo (id) {
  const [vehiculo, setVehiculo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:4000/api/auto/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehiculo(data)
        setLoading(false)
      })
  }, [id])

  return {
    vehiculo,
    loading
  }
}
