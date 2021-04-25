import { commerce } from '../lib/commerce';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function Home({ data }) {
  const images = [
    {
      original: '/images/home-bg.webp',
      thumbnail: '/images/home-bg.webp',
    },
    {
      original: '/images/home-bg-02.webp',
      thumbnail: '/images/home-bg-02.webp',
    },
    {
      original: '/images/home-bg-03.webp',
      thumbnail: '/images/home-bg-03.webp',
    },
  ];

  return (
    <main>
      <div className='md:px-10 pt-10'>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          items={images}
          showFullscreenButton={false}
        />
        <div className='md:pt-20 pt-10'>
          <div className=' flex items-center justify-between mb-3 px-5 md:px-0  max-w-7xl mx-auto'>
            <h1 className='md:text-2xl font-bold  text-gray-700'>Shop by Category</h1>
            <Link href='/products/all'>
              <a className='md:text-xl font-medium  text-gray-700'>Shop All</a>
            </Link>
          </div>
          <div className='sm:grid grid-cols-3 gap-5 max-w-7xl px-5 md:px-0  mx-auto'>
            <div className='mb-10 md:mb-0 '>
              <Link href='/categories/footwear'>
                <a>
                  <img src='images/cat-footwear.jpeg' alt='' />
                  <h1 className='md:text-xl hover:underline text-lg pt-1 text-gray-700 mb-2 font-medium'>
                    Shop Footwear
                  </h1>
                  <p className='underline text-sm'>Shop now</p>
                </a>
              </Link>
            </div>
            <div className='mb-10 md:mb-0 sm:-mt-3 '>
              <Link href='/categories/clothing'>
                <a>
                  <img src='/images/cat-clothing.jpeg' alt='' />
                  <h1 className='md:text-xl hover:underline text-lg pt-1 text-gray-700 mb-2 font-medium'>
                    Shop Clothing
                  </h1>
                  <p className='underline text-sm'>Shop now</p>
                </a>
              </Link>
            </div>
            <div className='mb-10 md:mb-0 '>
              <Link href='/categories/accessories'>
                <a>
                  <img src='/images/cat-accessories.jpeg' alt='' />
                  <h1 className='md:text-xl  text-gray-700 text-lg pt-1 mb-2 hover:underline  font-medium'>
                    Shop Accessories
                  </h1>
                  <p className='underline text-sm'>Shop now</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ShowCase />
    </main>
  );
}

export const getStaticProps = async () => {
  const { data } = await commerce.categories.list();
  return {
    props: {
      data,
    },
  };
};

const ShowCase = () => {
  return (
    <div className='bg-[#F4FAFB] md:my-40 my-20'>
      <div className='max-w-7xl mx-auto md:grid grid-cols-2'>
        <div className='flex flex-col h-full '>
          <div className='my-auto py-10 md:py-0 px-5  '>
            <h1 className='text-4xl font-light'>
              A new shopping <span className='block pt-3'>experience</span>
            </h1>
            <div className='pt-10'>
              <Link href='/products/all'>
                <a>
                  <div className='inline-flex text-gray-700 items-center  border-b border-gray-500'>
                    <span className='mr-5 '>Explore products</span>
                    <HiOutlineArrowNarrowRight />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className='md:-mt-20 md:-mb-10' src='/images/home-showcase-03.jpeg' alt='' />
        </div>
      </div>
    </div>
  );
};
