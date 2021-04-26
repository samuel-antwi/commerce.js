import { useQuery } from 'react-query';
import { commerce } from '../lib/commerce';

const useFetchCart = () => {
  const { data, isLoading, error } = useQuery('cart', async () => {
    const cartItem = await commerce.cart.retrieve();
    return cartItem;
  });

  if (isLoading) return 'Loading...';
  if (error) return 'error';

  return { cart: data };
};

export default useFetchCart;
