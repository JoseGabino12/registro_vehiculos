import { useState, useEffect } from 'react'

export function useVehiculos () {
  const [vehiculos, setVehiculos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/api/auto')
      .then((response) => response.json())
      .then((data) => {
        setVehiculos(data)
        setLoading(false)
      })
  }, [])

  return {
    vehiculos,
    loading
  }
}
