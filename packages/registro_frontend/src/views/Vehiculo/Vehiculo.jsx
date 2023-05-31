import TitleInfo from './components/TitleInfo'
import TableInfo from './components/TableInfo'
import Modal from '../../components/modal'

import { Card } from '@tremor/react'
import { useParams } from 'react-router-dom'

export default function Vehiculo () {
  const { id } = useParams()

  return (
    <main className='p-24'>
      <Card className='p-10'>
        <TitleInfo id={id} />
        <TableInfo id={id} />
      </Card>
      <Modal />
    </main>
  )
}
