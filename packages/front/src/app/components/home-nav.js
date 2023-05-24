'use client'
import { useState } from 'react'
import Nav from '../components/nav-bar'
import Vehículos from '../components/home-page'
import EntradaSalida from '../components/entrada-salida'

export default function HomeNav () {
  const [tab, setTab] = useState('1')

  return (
    <>
    <Nav tab={tab} setTab={setTab} />
      {
        tab === '1'
          ? <Vehículos />
          : <EntradaSalida />
      }
    </>
  )
}
