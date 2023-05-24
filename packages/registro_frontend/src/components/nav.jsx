import { TabList, Tab } from '@tremor/react'

export default function Nav ({ setTab }) {
  return (
    <header className='p-5 flex items-center justify-center'>
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
