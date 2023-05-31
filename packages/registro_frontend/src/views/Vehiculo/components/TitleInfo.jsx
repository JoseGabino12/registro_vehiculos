import { Title } from '@tremor/react'
import { useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { CircleLoading } from '../../../assets/Circle'
import { useVehiculo } from '../../../hooks/useVehiculo'

export default function TitleInfo ({ id }) {
  const navigate = useNavigate()
  const { vehiculo, deleteVehiculo } = useVehiculo(id)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await deleteVehiculo()
    setLoading(false)
    navigate('/')
  }

  return (
    <div className='flex justify-between'>
      <Title className='flex gap-2 items-center'>
        <Link to='/'>
          <IoIosArrowRoundBack className='text-2xl hover:scale-110 hover:cursor-pointer' />
        </Link>
        Registro de vehículo {vehiculo.id}
      </Title>
      {
        loading
          ? <CircleLoading classCircle='w-7 h-7 animate-spin text-red' />
          : <RiDeleteBin5Line onClick={handleDelete} className='text-2xl text-red-600 hover:scale-110 hover:cursor-pointer' />
      }
    </div>
  )
}
