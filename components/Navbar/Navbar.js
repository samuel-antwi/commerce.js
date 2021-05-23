import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { useProductsProvider } from '../../context/ProductsContexProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { cart } = useProductsProvider();

  return (
    <nav className='fixed z-10 w-full text-gray-100 bg-black md:mt-8'>
      <div className='flex items-center justify-between px-5 py-5 shadow md:px-14'>
        <Link href='/'>
          <a>
            <h1 className='font-bold tracking-wide text-gray-300 uppercase md:text-2xl'>
              Megashop
            </h1>
          </a>
        </Link>
        <div className='flex items-center space-x-4'>
          <Link href='/account'>
            <a className='hidden md:block'>
              <span className='flex items-center'>
                <FaUserCircle />
                <p className='ml-2 text-sm'>My Account</p>
              </span>
            </a>
          </Link>
          <Link href='/cart'>
            <a className='flex'>
              <FiShoppingCart size={30} />
              {cart.total_items !== 0 && (
                <p className='text-xs -mt-2 w-4 h-4 -ml-1 rounded-full flex items-center justify-center bg-[#0CA68E] text-gray-100'>
                  {cart.total_items}
                </p>
              )}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
