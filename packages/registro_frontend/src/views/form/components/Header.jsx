import { BsSendFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { CircleLoading } from '../../../assets/Circle'

export default function HeaderForm ({ handleSubmit, success, msgError, loading }) {
  return (
    <>
      {
        success
          ? <section className='flex flex-row gap-2 items-center justify-center'>
            <h1 className='text-3xl text-green-500'>Registro exitoso</h1>
          </section>
          : <section className='flex flex-row gap-2 items-center justify-center'>
            <h1 className='text-3xl text-red-500'>{msgError}</h1>
          </section>
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
