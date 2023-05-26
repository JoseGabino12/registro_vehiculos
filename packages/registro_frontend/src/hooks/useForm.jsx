import { useState } from 'react'

export function useForm () {
  const [msgError, setMsgError] = useState('')
  const [success, setSuccess] = useState(false)

  const postForm = async (form) => {
    if (form.marca === '' || form.modelo === '' || form.anio === '' || form.empresa === '' || form.numeconomico === '' || form.imagen === '') {
      setMsgError('Todos los campos son obligatorios')
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

      await respuesta.json()
      setSuccess(true)
    } catch (e) {
      console.log(e)
      setMsgError('Error al enviar el formulario')
    }
  }

  return {
    postForm,
    msgError,
    success
  }
}
