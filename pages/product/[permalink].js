import { commerce } from '../../lib/commerce';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight, BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useProductsProvider } from '../../context/ProductsContexProvider';

const ProductDetails = ({ product }) => {
  const { handleAddToCart } = useProductsProvider();
  const [viewDetails, setViewDetails] = useState(false);
  const [viewShippingInfo, setViewShippingInfo] = useState(false);
  const [active, setActive] = useState(0);

  const { name, media, price, description, variant_groups, id } = product;

  // View next image
  const handleNextImage = () => {
    if (active === 3) {
      setActive(0);
    }
    active < 3 ? setActive(active + 1) : null;
  };

  // View previous image
  const handlePreviousImage = () => {
    if (active === 0) {
      setActive(3);
    }
    active !== 0 ? setActive(active - 1) : null;
  };

  return (
    <main>
      <div className='container mx-auto'>
        <div className='md:grid grid-cols-6 gap-10'>
          <div className='col-span-1 hidden md:block '>
            <div className='flex flex-col space-y-3'>
              <img
                onClick={() => setActive(0)}
                className={`${
                  active === 0 && 'border border-gray-500'
                } w-[150px] h-[150px] object-cover cursor-pointer`}
                src={product.assets[0].url}
                alt={name}
              />
              <img
                onClick={() => setActive(1)}
                className={`${
                  active === 1 && 'border border-gray-500'
                } w-[150px] h-[150px] object-cover cursor-pointer`}
                src={product.assets[1].url}
                alt={name}
              />
              <img
                onClick={() => setActive(2)}
                className={`${
                  active === 2 && 'border border-gray-500'
                } w-[150px] h-[150px] object-cover cursor-pointer`}
                src={product.assets[2].url}
                alt={name}
              />
              <img
                onClick={() => setActive(3)}
                className={`${
                  active === 3 && 'border border-gray-500'
                } w-[150px] h-[150px] object-cover cursor-pointer`}
                src={product.assets[3].url}
                alt={name}
              />
            </div>
          </div>
          <div className='col-span-3 mb-5 md:mb-0 relative '>
            <div className='relative'>
              <img src={product.assets[active].url} />
              <div className='flex items-center justify-between absolute top-[45%] w-full '>
                <button
                  aria-label='previous photo'
                  className='md:p-5'
                  onClick={handlePreviousImage}>
                  <BsChevronLeft className='text-gray-400' size={40} />
                </button>
                <button aria-label='next photo' className='md:p-5' onClick={handleNextImage}>
                  <BsChevronRight className='text-gray-400' size={40} />
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='border-b border-gray-300'>
              <div className='mb-10 px-5 md:px-0'>
                <h1 className='md:text-xl text-gray-800 tracking-wider mb-2'>{name}</h1>
                <p className='text-xl font-semibold text-gray-700 mb-3 tracking-wide'>
                  {price.formatted_with_symbol}
                </p>
                <p className='text-green-600 text-lg mb-3'>In stock</p>
                <div className='text-gray-600' dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
            <div className='px-5 md:px-0 pt-6'>
              <button
                onClick={() => handleAddToCart(id, 1)}
                aria-label='add to basket'
                className='bg-black flex items-center justify-around w-full focus:outline-none focus:ring-2 focus:ring-gray-500 space-x-10 text-gray-300 py-3'>
                <span className='uppercase tracking-wider'>Add to basket</span>
                <HiOutlineShoppingCart size={20} />
              </button>
            </div>
            <div className='border-b border-black mx-5 md:mx-0'>
              <button
                onClick={() => setViewDetails(!viewDetails)}
                aria-label='See shipping information'
                className='flex items-center justify-between w-full mt-12 mb-2 focus:outline-none'>
                <span className='text-gray-800'>Shipping and returns</span>
                {viewDetails ? <BiMinus size={25} /> : <BsPlus size={25} />}
              </button>
              {viewDetails && (
                <p className='pt-3 text-gray-500 text-sm mb-3'>
                  Arrives in 5 to 7 days, returns accepted within 30 days. For more information,
                  click here.
                </p>
              )}
            </div>
            <div className='border-b border-black mx-5 md:mx-0'>
              <button
                onClick={() => setViewShippingInfo(!viewShippingInfo)}
                aria-label='Read details'
                className='flex items-center justify-between w-full mt-7 mb-2 focus:outline-none'>
                <span className='text-gray-800'>Details</span>
                {viewShippingInfo ? <BiMinus size={25} /> : <BsPlus size={25} />}
              </button>
              {viewShippingInfo && (
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className='pt-3 text-gray-500 text-sm mb-3'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });
  return {
    props: {
      product,
    },
  };
};
