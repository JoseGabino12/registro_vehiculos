'use client'
import Vehículos from './components/home-page'
import Nav from './components/nav-bar'
import EntradaSalida from './components/entrada-salida'
import { useState } from 'react'

export default function Home () {
  const [tab, setTab] = useState('1')

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Nav tab={tab} setTab={setTab} />
      {
        tab === '1'
          ? <Vehículos />
          : <EntradaSalida />
      }
    </main>
  )
}
