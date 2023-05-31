import FormInputs from './components/FormInputs'
import HeaderForm from './components/Header'
import { useForm } from '../../hooks/useForm'
import { useVehiculo } from '../../hooks/useVehiculo'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Form () {
  const { id } = useParams()
  const { postForm, msg, loading, isMsg, putForm } = useForm()
  const { vehiculo } = useVehiculo(id)
  const [form, setForm] = useState({
    marca: '',
    modelo: '',
    anio: '',
    empresa: '',
    numeconomico: '',
    imagen: ''
  })

  useEffect(() => {
    if (vehiculo) {
      setForm(vehiculo)
    }
  }, [vehiculo])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (id !== undefined) {
      await putForm(form, id)
    } else {
      await postForm(form)
    }
  }

  return (
    <main className='p-24 flex justify-center items-center'>
      <section className="w-1/2 p-9 flex flex-col gap-5 rounded-lg border-2 shadow-lg">
        <HeaderForm id={id} handleSubmit={handleSubmit} success={isMsg} msgError={msg} loading={loading} />
        <FormInputs vehiculo={vehiculo} form={form} handleChange={handleChange} />
      </section>
    </main>
  )
}
