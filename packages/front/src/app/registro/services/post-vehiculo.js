export default async function PostVehiculo (form) {
  const res = await fetch('http://localhost:4000/api/auto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      marca: form.marca,
      modelo: form.modelo,
      anio: form.anio,
      empresa: form.empresa,
      numeconomico: form.numeconomico,
      imagen: form.imagen
    })
  })
  const data = await res.statusText()

  return data
}
