import { Title } from '@tremor/react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function TitleInfo ({ id }) {
  return (
    <Title className='flex gap-2 items-center'>
      <Link to='/'>
        <IoIosArrowRoundBack className='text-2xl hover:scale-110 hover:cursor-pointer' />
      </Link>
      Registro de vehículo {id}
    </Title>
  )
}
