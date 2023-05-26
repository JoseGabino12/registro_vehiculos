import { TextInput } from '@tremor/react'

export default function FormInputs ({ handleChange }) {
  return (
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
  )
}
