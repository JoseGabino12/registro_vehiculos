import TableVehiculo from '../components/table-vehiculo'
import Link from 'next/link'
import Info from '../components/info'

import {
  Card,
  Title
} from '@tremor/react'

import { IoIosArrowRoundBack } from 'react-icons/io'

export default function Vehiculos ({ params }) {
  return (
    <main className='flex justify-center items-center h-screen p-24'>
      <Card>
        <Title className='flex gap-2 items-center'>
          <Link href='/'>
            <IoIosArrowRoundBack className='text-2xl hover:scale-110 hover:cursor-pointer' />
          </Link>
          Registro de vehículo {params.id}
        </Title>

        <div className='grid gap-4 grid-flow-col p-10'>
          <Info />
          <TableVehiculo />
        </div>

      </Card>
    </main>
  )
}
