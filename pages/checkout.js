import { useState } from 'react'
import { useEffect } from 'react'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import Order from '../components/Checkout/Order'
import LoadingScreen from '../components/LoadingScreen'
import { useProductsProvider } from '../context/ProductsContexProvider'
import { commerce } from '../lib/commerce'
import Link from 'next/link'
import { IoMdArrowDropright } from 'react-icons/io'

const Checkout = () => {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const { cart } = useProductsProvider()

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateTokenFrom('cart', commerce.cart.id())
          setCheckoutToken(token)
        } catch {}
      }
      generateToken()
    }
  }, [cart])

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  )

  // return (
  //   <main className='min-h-screen max-w-[85rem] mx-auto pt-10 pb-20 px-5 2xl:px-0'>
  //     <div className='flex items-center mb-6 space-x-2 text-sm '>
  //       <Link href='/'>
  //         <a className='text-gray-700 hover:underline'>Basket</a>
  //       </Link>
  //       <IoMdArrowDropright />
  //       <h1 className='hover:underline'>checkout</h1>
  //     </div>
  //     {checkoutToken ? (
  //       <div className='grid-cols-5 gap-10 lg:grid'>
  //         <div className='col-span-2 lg:hidden'>
  //           <Order checkoutToken={checkoutToken} />
  //         </div>
  //         <div className='col-span-3'>
  //           <CheckoutForm checkoutToken={checkoutToken} />
  //         </div>
  //         <div className='hidden col-span-2 lg:block'>
  //           <Order checkoutToken={checkoutToken} />
  //         </div>
  //       </div>
  //     ) : (
  //       <LoadingScreen />
  //     )}
  //   </main>
  // )
}

export default Checkout
