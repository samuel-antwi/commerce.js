import { useState } from 'react';
import { useEffect } from 'react';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import Order from '../components/Checkout/Order';
import LoadingScreen from '../components/LoadingScreen';
import { useProductsProvider } from '../context/ProductsContexProvider';
import { commerce } from '../lib/commerce';
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';
import PaymentDetailsForm from '../components/Checkout/PaymentDetailsForm';
import { useQuery } from 'react-query';

const Checkout = () => {
  const { cart } = useProductsProvider();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingCountries, setShippingCountries] = useState([]);

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart]);

  useEffect(() => {
    fetchShippingCountries();
  }, []);

  return (
    <main className='min-h-screen max-w-[85rem] mx-auto pt-10 px-5 xl:px-0'>
      <div className=' flex items-center mb-6 text-sm  space-x-2'>
        <Link href='/'>
          <a className='hover:underline text-gray-700'>Basket</a>
        </Link>
        <IoMdArrowDropright />
        <h1 className='hover:underline'>checkout</h1>
      </div>
      {checkoutToken ? (
        <div className=' lg:grid grid-cols-5 lg:gap-20 gap-10'>
          <div className='col-span-3'>
            <CheckoutForm checkoutToken={checkoutToken} />
            <PaymentDetailsForm checkoutToken={checkoutToken} />
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
