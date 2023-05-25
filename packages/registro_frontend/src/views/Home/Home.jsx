import Nav from '../../components/nav'
import Vehículos from '../Vehiculos/Vehiculos'
import EntradaSalida from '../EntradaSalida/EntradaSalida'
import { useState } from 'react'

export default function Home () {
  const [tab, setTab] = useState('1')

  return (
    <main className='p-24 felx justify-center items-center'>
      <Nav tab={tab} setTab={setTab} />
      {
        tab === '1'
          ? <Vehículos />
          : <EntradaSalida />
      }
    </main>
  )
}
