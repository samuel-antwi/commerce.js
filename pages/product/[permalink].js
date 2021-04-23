import { commerce } from '../../lib/commerce';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight, BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useProductsProvider } from '../../context/ProductsContexProvider';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const ProductDetails = ({ product }) => {
  const { handleAddToCart } = useProductsProvider();
  const [viewDetails, setViewDetails] = useState(false);
  const [viewShippingInfo, setViewShippingInfo] = useState(false);
  const [active, setActive] = useState(0);

  const { name, media, price, description, variant_groups, id, assets } = product;

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

  const images = [
    {
      original: assets[0].url,
      thumbnail: assets[0].url,
    },
    {
      original: assets[1].url,
      thumbnail: assets[1].url,
    },
    {
      original: assets[2].url,
      thumbnail: assets[2].url,
    },
    {
      original: assets[3].url,
      thumbnail: assets[3].url,
    },
  ];

  return (
    <main className='pt-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='md:grid grid-cols-6 gap-10'>
          <div className='col-span-4 mb-5 md:mb-0 relative '>
            <div className='relative '>
              <ImageGallery
                showPlayButton={false}
                thumbnailPosition='left'
                items={images}
                onErrorImageURL={name}
                showFullscreenButton={false}
              />
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
                onClick={() => {
                  setViewDetails(!viewDetails);
                  viewShippingInfo ? setViewShippingInfo(false) : null;
                }}
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
                onClick={() => {
                  setViewShippingInfo(!viewShippingInfo);
                  viewDetails ? setViewDetails(false) : null;
                }}
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
    fallback: true,
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
