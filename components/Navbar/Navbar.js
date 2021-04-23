import Image from 'next/image';
import { BsBag } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { useProductsProvider } from '../../context/ProductsContexProvider';

const Navbar = () => {
  const { cart } = useProductsProvider();

  return (
    <nav className='sticky top-0 bg-[#2D2D2D] text-gray-100 mt-4  z-10'>
      <div className='md:px-14 px-8 py-5 shadow  flex items-center justify-between'>
        <Link href='/'>
          <a>
            <h1>E-commerce</h1>
          </a>
        </Link>
        <Link href='/products/all'>
          <a>Shop</a>
        </Link>
        <Link href='/cart'>
          <a className='flex'>
            <FiShoppingCart size={30} />
            <p className='text-xs -mt-2 w-4 h-4 -ml-1 rounded-full flex items-center justify-center bg-[#0CA68E] text-gray-100'>
              {cart.total_items}
            </p>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
