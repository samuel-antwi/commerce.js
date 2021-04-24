import { useState } from 'react';
import { useEffect } from 'react';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import Order from '../components/Checkout/Order';
import LoadingScreen from '../components/LoadingScreen';
import { useProductsProvider } from '../context/ProductsContexProvider';
import { commerce } from '../lib/commerce';

const Checkout = () => {
  const { cart } = useProductsProvider();
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart]);

  return (
    <main className='min-h-screen max-w-[85rem] mx-auto pt-10 px-5 xl:px-0'>
      {checkoutToken ? (
        <div className=' lg:grid grid-cols-5 lg:gap-20 gap-10'>
          <div className='col-span-3'>
            <CheckoutForm checkoutToken={checkoutToken} />
          </div>
          <div className='col-span-2'>
            <Order checkoutToken={checkoutToken} />
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </main>
  );
};

export default Checkout;
