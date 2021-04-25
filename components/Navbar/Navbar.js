import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { useProductsProvider } from '../../context/ProductsContexProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { cart } = useProductsProvider();

  return (
    <nav className='sticky top-0 bg-black text-gray-100 mt-4  z-10'>
      <div className='md:px-14 px-5 py-5 shadow  flex items-center justify-between'>
        <Link href='/'>
          <a>
            <h1 className='uppercase md:text-2xl font-bold tracking-wide text-gray-300'>
              Megashop
            </h1>
          </a>
        </Link>
        <div className='flex items-center space-x-4'>
          <Link href='/account'>
            <a>
              <span className='flex items-center'>
                <FaUserCircle />
                <p className='ml-2 text-sm'>My Account</p>
              </span>
            </a>
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
      </div>
    </nav>
  );
};

export default Navbar;
