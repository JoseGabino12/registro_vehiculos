import { BsSendFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { CircleLoading } from '../../../assets/Circle'
import { Callout } from '@tremor/react'

export default function HeaderForm ({ handleSubmit, success, msgError, loading }) {
  return (
    <>
      {
        success
          ? <Callout title={msgError.type === 'error' ? 'Error' : 'Exito'} color={msgError.type === 'error' ? 'rose' : 'teal'}>{msgError.msg}</Callout>
          : null
      }
      <div className='flex flex-row mb-7 items-center justify-between'>
        <Link to='/'>
          <IoIosArrowRoundBack className='text-5xl hover:scale-110 hover:cursor-pointer' />
        </Link>
        <h2 className='font-semibold text-3xl'>Registro</h2>
        <form
          onSubmit={handleSubmit}
        >
          <button type="submit" className='text-lg bg-green-500 p-3 rounded-md hover:bg-green-700 hover:text-white hover:scale-110 transition duration-150 ease-in-out'>
            {
              loading
                ? <CircleLoading classCircle='w-7 h-7 animate-spin text-white' />
                : <BsSendFill className='text-white' />
            }
          </button>
        </form>
      </div>
    </>
  )
}
