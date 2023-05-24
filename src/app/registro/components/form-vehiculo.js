'use client'
import { TextInput } from '@tremor/react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { BsSendFill } from 'react-icons/bs'

import Link from 'next/link'

export default function Form ({ type }) {
  return (
    <section className="w-1/2 p-9 flex flex-col gap-5 rounded-lg border-2 shadow-lg">
      <div className='flex flex-row mb-7 items-center justify-between'>
        <Link href='/'>
          <IoIosArrowRoundBack className='text-5xl hover:scale-110 hover:cursor-pointer' />
        </Link>
        <h2 className='font-semibold text-3xl'>Registro</h2>
        <button className='text-lg bg-green-500 p-3 rounded-md hover:bg-green-700 hover:text-white hover:scale-110 transition duration-150 ease-in-out'>
          <BsSendFill className='text-white' />
        </button>
      </div>

      <div className='w-full flex flex-col gap-3'>
        <label htmlFor="marca">Marca</label>
        <TextInput id="marca" placeholder='BMW' />
        <label htmlFor="marca">Año</label>
        <TextInput id="marca" placeholder='2016' />
        <label htmlFor="marca">Modelo</label>
        <TextInput id="marca" placeholder='BMW Serie 1 M Coupé' />
        <label htmlFor="marca">Empresa</label>
        <TextInput id="marca" placeholder='BMW' />
        <label htmlFor="marca">Número económico</label>
        <TextInput id="marca" placeholder='1234' />
      </div>
    </section>
  )
}
