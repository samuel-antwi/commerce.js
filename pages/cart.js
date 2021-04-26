import EmptyCart from '../components/Cart/EmptyCart';
import FilledCart from '../components/Cart/FilledCart';
import { useProductsProvider } from '../context/ProductsContexProvider';
import CheckoutButton from '../components/Cart/CheckoutButton';

const Cart = () => {
  const { cart } = useProductsProvider();

  return (
    <main className='pt-10'>
      <div className='max-w-7xl mx-auto'>
        {!cart?.line_items?.length ? <EmptyCart /> : <FilledCart cart={cart} />}
        {cart?.line_items?.length > 0 && <CheckoutButton cart={cart} />}
      </div>
    </main>
  );
};

export default Cart;
