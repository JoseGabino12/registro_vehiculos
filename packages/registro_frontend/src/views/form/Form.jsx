'use client'
import { TextInput } from '@tremor/react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { BsSendFill } from 'react-icons/bs'

import { useState } from 'react'

import { Link } from 'react-router-dom'
import StatusInfo from '../../components/StatusInfo/StatusInfo'

export default function Form () {
  const [status, setStatus] = useState('')
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

  const handleClick = () => {
    setStatus(form)
  }

  return (
    <>
      {
        status === 'OK'
          ? (
          <StatusInfo status={status} />
            )
          : (
          <section className="w-1/2 p-9 flex flex-col gap-5 rounded-lg border-2 shadow-lg">
            <div className='flex flex-row mb-7 items-center justify-between'>
              <Link to='/'>
                <IoIosArrowRoundBack className='text-5xl hover:scale-110 hover:cursor-pointer' />
              </Link>
              <h2 className='font-semibold text-3xl'>Registro</h2>
              <button onClick={handleClick} className='text-lg bg-green-500 p-3 rounded-md hover:bg-green-700 hover:text-white hover:scale-110 transition duration-150 ease-in-out'>
                <BsSendFill className='text-white' />
              </button>
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
            )
      }
    </>
  )
}
