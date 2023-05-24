'use client'
import { TabList, Tab } from '@tremor/react'

export default function Nav ({ tab, setTab }) {
  return (
    <header className='p-5'>
        <TabList
          defaultValue="1"
          onValueChange={(value) => setTab(value)}
          className="mt-6"
        >
          <Tab value="1" text="Registro de vehículos" />
          <Tab value="2" text="Entrada y salida" />
        </TabList>
    </header>
  )
}
