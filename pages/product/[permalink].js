import { commerce } from '../../lib/commerce';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight, BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [viewDetails, setViewDetails] = useState(false);
  const [viewShippingInfo, setViewShippingInfo] = useState(false);

  console.log(product);

  const { name, media, price, description, variant_groups } = product;

  return (
    <main>
      <div className='container mx-auto'>
        <div className='md:grid grid-cols-6 gap-10'>
          <div className='col-span-1 hidden md:block'>
            <p>hey</p>
          </div>
          <div className='col-span-3 mb-5 md:mb-0 relative'>
            <img src={media.source} />
            <div className='flex items-center justify-between absolute w-full left-0 right-0 top-1/2'>
              <button>
                <BsChevronLeft className='text-gray-400' size={40} />
              </button>
              <button>
                <BsChevronRight className='text-gray-400' size={40} />
              </button>
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
              <button className='bg-black focus:outline-none focus:ring-2 focus:ring-gray-500  items-center space-x-10 text-gray-300 py-3 block w-full justify-between'>
                <span>Add to cart</span>
                <span>|</span>
                <span> {price.formatted_with_symbol}</span>
              </button>
            </div>
            <div className='border-b border-black'>
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
            <div className='border-b border-black'>
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

export const ProductImagesList = ({ product }) => {
  const { assets } = product;
  // console.log(assets);
  return (
    <div>
      {assets.map((asset) => {
        <img src={asset.url} alt='' />;
      })}
    </div>
  );
};
