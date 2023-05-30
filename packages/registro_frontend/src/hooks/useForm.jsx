import { useState } from 'react'

export function useForm () {
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const postForm = async (form) => {
    setMsg('')
    setLoading(true)
    if (form.marca === '' || form.modelo === '' || form.anio === '' || form.empresa === '' || form.numeconomico === '' || form.imagen === '') {
      setMsg('Todos los campos son obligatorios')
      setLoading(false)
      return
    }

    try {
      const respuesta = await fetch('http://localhost:4000/api/auto/', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const res = await respuesta.json()
      setMsg(res.msg)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setMsg('Error al enviar el formulario')
    }
  }

  return {
    loading,
    postForm,
    msg
  }
}
