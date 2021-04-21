import { BsHeart, BsBag, BsPlus, BsExclamationSquare } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import Image from 'next/image';
import Link from 'next/link';
import { useProductsProvider } from '../../context/ProductsContexProvider';
import { BsChevronRight } from 'react-icons/bs';

const FilledCart = ({ cart }) => {
  const { handleUpdateQty } = useProductsProvider();

  if (!cart.line_items.length) return <p>Loading...</p>;

  return (
    <div>
      <h1 className='font-semibold md:text-2xl text-lg capitalize'>My basket</h1>
      <div className='flex items-center justify-between my-5'>
        <Link href='/products'>
          <a>
            <p className='border uppercase  py-2 px-5'>shop more</p>
          </a>
        </Link>
        <div className='w-1/2'>
          <div className='flex justify-between items-center text-xl font-bold text-gray-700 bg-gray-100 p-2'>
            <h1>Sub total</h1>
            {Object.keys(cart).length !== 0 && <p>{cart.subtotal.formatted_with_symbol}</p>}
          </div>
          <Link href='/checkout'>
            <a>
              <button className='border block w-full uppercase  py-2 px-5 bg-[#08A78E] text-gray-100'>
                <span className='flex items-center justify-between'>
                  checkout securely
                  <BsChevronRight />
                </span>
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className='bg-white shadow'>
        {cart.line_items.map((product) => {
          const { price, name, media, id, quantity, line_total } = product;
          return (
            <div key={id} className='md:grid grid-cols-4 border-b'>
              <div className='flex col-span-2 py-5 mx-5 relative' key={id}>
                <Link href='/'>
                  <a className='mr-3'>
                    <img className='w-[100px] h-[100px]' src={media.source} alt={name} />
                  </a>
                </Link>
                <div className='flex flex-col space-y-2'>
                  <Link href='/'>
                    <a className='text-gray-600 hover:text-blue-400'>{name}</a>
                  </Link>
                  <p className='text-green-700'>In stock</p>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='flex flex-col justify-center items-center h-full'>
                  <div className='my-auto'>
                    <h2 className='text-center mb-5'>{price.formatted_with_symbol}</h2>
                    <div className='flex items-center space-x-3'>
                      <button
                        onClick={() => handleUpdateQty(id, quantity - 1)}
                        className={`border px-1.5 py-1.5 hover:bg-gray-800 focus:outline-none hover:text-gray-100 border-gray-300`}>
                        <BiMinus size={20} />
                      </button>
                      <p>{quantity}</p>
                      <button
                        onClick={() => handleUpdateQty(id, quantity + 1)}
                        className='border px-1.5 py-1.5 focus:outline-none hover:bg-gray-800 hover:text-gray-100 border-gray-300'>
                        <BsPlus size={20} />
                      </button>
                    </div>
                    <div className='flex justify-center items-center'>
                      <button
                        aria-label='Remove from cart'
                        className='py-2 focus:outline-none text-gray-600 hover:text-red-600 text-sm underline'>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='flex justify-end px-5 font-semibold tracking-wider text-gray-800 text-lg'>
                  <p>{line_total.formatted_with_symbol}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilledCart;
