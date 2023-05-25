'use client'
import { TextInput } from '@tremor/react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { BsSendFill } from 'react-icons/bs'

import { useState } from 'react'

import { Link } from 'react-router-dom'

export default function Form () {
  const [msgError, setMsgError] = useState('')
  const [success, setSuccess] = useState(false)
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

  return (
    <main className='p-24 flex justify-center items-center'>
          <section className="w-1/2 p-9 flex flex-col gap-5 rounded-lg border-2 shadow-lg">
          {
            success
              ? <section className='flex flex-row gap-2 items-center justify-center'>
                  <h1 className='text-3xl text-green-500'>Registro exitoso</h1>
                </section>
              : <section className='flex flex-row gap-2 items-center justify-center'>
                  <h1 className='text-3xl text-red-500'>{msgError}</h1>
                </section>
          }
        <div className='flex flex-row mb-7 items-center justify-between'>
          <Link to='/'>
            <IoIosArrowRoundBack className='text-5xl hover:scale-110 hover:cursor-pointer' />
          </Link>
          <h2 className='font-semibold text-3xl'>Registro</h2>
          <form
            onSubmit={handleSubmit}
          >
            <button type="submit" className='text-lg bg-green-500 p-3 rounded-md hover:bg-green-700 hover:text-white hover:scale-110 transition duration-150 ease-in-out'>
              <BsSendFill className='text-white' />
            </button>
          </form>
        </div>

        <div className='w-full flex flex-col gap-3'>
          <label htmlFor="marca">Marca</label>
          <TextInput id="marca" onChange={handleChange} className='font-normal text-black' placeholder='BMW' />
          <label htmlFor="marca">Año</label>
          <TextInput id="anio" onChange={handleChange} className='font-normal text-black' placeholder='2016' />
          <label htmlFor="marca">Modelo</label>
          <TextInput id="modelo" onChange={handleChange} className='font-normal text-black' placeholder='BMW Serie 1 M Coupé' />
          <label htmlFor="marca">Empresa</label>
          <TextInput id="empresa" onChange={handleChange} className='font-normal text-black' placeholder='BMW' />
          <label htmlFor="marca">Número económico</label>
          <TextInput id="numeconomico" onChange={handleChange} className='font-normal text-black' placeholder='1234' />
          <label htmlFor="marca">Imagen URL</label>
          <TextInput id="imagen" onChange={handleChange} className='font-normal text-black' placeholder='https://www.mazda.mx/mazda3.png' />
        </div>
      </section>
    </main>
  )
}
