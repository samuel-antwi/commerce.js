import EmptyCart from '../components/Cart/EmptyCart'
import FilledCart from '../components/Cart/FilledCart'
import { useProductsProvider } from '../context/ProductsContexProvider'
import CheckoutButton from '../components/Cart/CheckoutButton'

const Cart = () => {
  const { cart } = useProductsProvider()

  return (
    <main className='min-h-screen pt-10'>
      {Object.keys(cart).length === 0 ? null : (
        <div className='mx-auto max-w-7xl'>
          {!cart?.line_items?.length ? <EmptyCart /> : <FilledCart cart={cart} />}
          {cart?.line_items?.length > 0 && <CheckoutButton cart={cart} />}
        </div>
      )}
    </main>
  )
}

export default Cart
