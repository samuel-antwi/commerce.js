import { ProductsContext } from './ProductsContext';
import { useContext, useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const { data, status, isLoading } = useQuery('cart', async () => {
    const cartItem = await commerce.cart.retrieve();
    return cartItem;
  });

  const router = useRouter();

  // Fetch cart
  // const fetchCart = async () => {
  //   const cartItem = await commerce.cart.retrieve();
  //   setCart(cartItem);
  // };

  // handle add to cart function
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
    router.push('/cart');
  };

  // Update cart
  const handleUpdateQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  // Remove from cart
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  useEffect(() => {
    if (status === 'success') {
      setCart(data);
    }
  }, [status, data]);

  if (isLoading) return null;

  return (
    <ProductsContext.Provider
      value={{ cart, status, handleAddToCart, handleUpdateQty, handleRemoveFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsProvider = () => useContext(ProductsContext);
