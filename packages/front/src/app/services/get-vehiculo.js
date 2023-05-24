export default async function getVehiculo () {
  const res = await fetch('http://localhost:4000/api/auto')
  const data = await res.json()

  return data
}
