import React, { useState } from 'react';
import EmptyCart from '../components/Cart/EmptyCart';
import FilledCart from '../components/Cart/FilledCart';
import { useProductsProvider } from '../context/ProductsContexProvider';
import CheckoutButton from '../components/Cart/CheckoutButton';

const Cart = () => {
  const { cart } = useProductsProvider();

  if (Object.keys(cart).length === 0) return null;

  return (
    <main>
      <div className='max-w-7xl mx-auto'>
        {!cart.line_items?.length ? <EmptyCart /> : <FilledCart cart={cart} />}
        {cart.line_items.length > 0 && <CheckoutButton cart={cart} />}
      </div>
    </main>
  );
};

export default Cart;
