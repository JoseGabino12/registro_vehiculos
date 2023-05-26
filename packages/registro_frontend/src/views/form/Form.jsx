import FormInputs from './components/FormInputs'
import HeaderForm from './components/Header'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react'

export default function Form () {
  const { postForm, msgError, success } = useForm()
  const [form, setForm] = useState({
    marca: '',
    modelo: '',
    anio: '',
    empresa: '',
    numeconomico: '',
    imagen: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await postForm(form)
  }

  return (
    <main className='p-24 flex justify-center items-center'>
      <section className="w-1/2 p-9 flex flex-col gap-5 rounded-lg border-2 shadow-lg">
        <HeaderForm handleSubmit={handleSubmit} success={success} msgError={msgError} />
        <FormInputs handleChange={handleChange} />
      </section>
    </main>
  )
}
