import { TextInput } from '@tremor/react'

export default function FormInputs ({ handleChange, vehiculo, form }) {
  return (
    <>
    {
      vehiculo
        ? (
        <div className='w-full flex flex-col gap-3'>
          <label htmlFor="marca">Marca</label>
          <TextInput id="marca" onChange={handleChange} value={form.marca} className='font-normal text-black' placeholder='BMW' />
          <label htmlFor="anio">Año</label>
          <TextInput id="anio" onChange={handleChange} value={form.anio} className='font-normal text-black' placeholder='2016' />
          <label htmlFor="modelo">Modelo</label>
          <TextInput id="modelo" onChange={handleChange} value={form.modelo} className='font-normal text-black' placeholder='BMW Serie 1 M Coupé' />
          <label htmlFor="empresa">Empresa</label>
          <TextInput id="empresa" onChange={handleChange} value={form.empresa} className='font-normal text-black' placeholder='BMW' />
          <label htmlFor="numeconomico">Número económico</label>
          <TextInput id="numeconomico" onChange={handleChange} value={form.numeconomico} className='font-normal text-black' placeholder='1234' />
          <label htmlFor="imagen">Imagen URL</label>
          <TextInput id="imagen" onChange={handleChange} value={form.imagen} className='font-normal text-black' placeholder='https://www.mazda.mx/mazda3.png' />
        </div>
          )
        : (
        <div className='w-full flex flex-col gap-3'>
          <label htmlFor="marca">Marca</label>
          <TextInput id="marca" onChange={handleChange} className='font-normal text-black' placeholder='BMW' />
          <label htmlFor="anio">Año</label>
          <TextInput id="anio" onChange={handleChange} className='font-normal text-black' placeholder='2016' />
          <label htmlFor="modelo">Modelo</label>
          <TextInput id="modelo" onChange={handleChange} className='font-normal text-black' placeholder='BMW Serie 1 M Coupé' />
          <label htmlFor="empresa">Empresa</label>
          <TextInput id="empresa" onChange={handleChange} className='font-normal text-black' placeholder='BMW' />
          <label htmlFor="numeconomico">Número económico</label>
          <TextInput id="numeconomico" onChange={handleChange} className='font-normal text-black' placeholder='1234' />
          <label htmlFor="imagen">Imagen URL</label>
          <TextInput id="imagen" onChange={handleChange} className='font-normal text-black' placeholder='https://www.mazda.mx/mazda3.png' />
        </div>
          )
    }
    </>
  )
}
