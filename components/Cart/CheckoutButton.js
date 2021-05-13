import Link from 'next/link'
import { useRouter } from 'next/router'
import { VscLock } from 'react-icons/vsc'

const CheckoutButton = ({ cart }) => {
  const router = useRouter()

  return (
    <div>
      <div className='bg-[#F4FAFB]  md:p-10 p-5 mt-5 '>
        <div className='flex items-center justify-end '>
          <h1 className='mr-3 text-gray-500'>Subtotal:</h1>
          <p>{cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div className='items-center justify-between mt-5 sm:flex sm:space-x-3'>
          <button
            onClick={() => router.push('/')}
            className='border block text-center mb-5 sm:mb-0 hover:bg-black hover:text-gray-100 transition duration-300 border-black capitalize py-3 px-1 bg-white w-full sm:w-[300px]'>
            continue shopping
          </button>
          <Link href='/checkout'>
            <a className='border block text-center border-black capitalize py-3 px-1 bg-black text-white w-full sm:w-[300px]'>
              <span className='flex items-center justify-center'>
                <VscLock className='mr-4' />
                checkout
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutButton
