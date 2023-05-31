import { useState } from 'react'

export function useForm () {
  const [msg, setMsg] = useState({
    msg: '',
    type: ''
  })
  const [isMsg, setIsMsg] = useState(false)
  const [loading, setLoading] = useState(false)

  const postForm = async (form) => {
    setMsg({ msg: '', type: '' })
    setIsMsg(false)
    setLoading(true)
    if (form.marca === '' || form.modelo === '' || form.anio === '' || form.empresa === '' || form.numeconomico === '' || form.imagen === '') {
      setMsg({ msg: 'Todos los campos son obligatorios', type: 'error' })
      setIsMsg(true)
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

      if (!respuesta.ok) {
        const res = await respuesta.json()
        setMsg({ msg: res.msg, type: 'error' })
        setIsMsg(true)
        setLoading(false)
        return
      } else {
        setMsg({ msg: 'Formulario enviado correctamente', type: 'success' })
        setIsMsg(true)
        setLoading(false)
        return
      }
    } catch (e) {
      setMsg('Error al enviar el formulario')
    }
  }

  return {
    loading,
    postForm,
    msg,
    isMsg
  }
}
