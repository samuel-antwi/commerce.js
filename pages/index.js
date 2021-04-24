import { commerce } from '../lib/commerce';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
export default function Home({ data }) {
  console.log(data);

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
      <div className='md:px-10'>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          items={images}
          showFullscreenButton={false}
        />
        <div className='md:py-20 py-5 '>
          <div className=' flex items-center justify-between mb-3 px-5 md:px-0  max-w-7xl mx-auto'>
            <h1 className='md:text-4xl font-bold  text-gray-700'>Shop by Category</h1>
            <Link href='/products/all'>
              <a className='md:text-2xl font-medium  text-gray-700'>Shop All</a>
            </Link>
          </div>
          <div className='sm:grid grid-cols-3 gap-5 max-w-7xl px-5 md:px-0  mx-auto'>
            <div className='mb-10 md:mb-0 '>
              <Link href='/categories/footwear'>
                <a className=''>
                  <img src='images/cat-footwear.jpeg' alt='' />
                  <h1 className='md:text-2xl text-lg pt-1 font-medium'>Shop Footwear</h1>
                </a>
              </Link>
            </div>
            <div className='mb-10 md:mb-0 '>
              <Link href='/categories/clothing'>
                <a>
                  <img src='/images/cat-clothing.jpeg' alt='' />
                  <h1 className='md:text-2xl text-lg pt-1 font-medium'>Shop Clothing</h1>
                </a>
              </Link>
            </div>
            <div className='mb-10 md:mb-0 '>
              <Link href='/categories/accessories'>
                <a>
                  <img src='/images/cat-accessories.jpeg' alt='' />
                  <h1 className='md:text-2xl text-lg pt-1  font-medium'>Shop Accessories</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
