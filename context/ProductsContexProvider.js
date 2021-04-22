import { ProductsContext } from './ProductsContext';
import { useContext, useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { useRouter } from 'next/router';

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const router = useRouter();

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

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
    fetchCart();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, cart, handleAddToCart, handleUpdateQty, handleRemoveFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsProvider = () => useContext(ProductsContext);
