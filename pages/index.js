import { commerce } from '../lib/commerce'
import Link from 'next/link'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { BsChevronRight } from 'react-icons/bs'
import { RiArrowRightSFill } from 'react-icons/ri'
import images from '../lib/images'

export default function Home({ data }) {
  const router = useRouter()

  return (
    <main>
      <div className='pt-10 md:px-10'>
        <div className='relative'>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            items={images}
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
          <div className='absolute hidden md:block lg:right-10 lg:bottom-10 right-6 bottom-6'>
            <button
              onClick={() => router.push('/products/all')}
              className='px-10 py-3 text-lg font-medium transition duration-300 bg-white focus:outline-none lg:py-5 lg:px-20 hover:bg-black hover:text-gray-100'>
              <div className='flex items-center'>
                <span className='mr-2'>Shop Now</span>
                <BsChevronRight className='text-xl' />
              </div>
            </button>
          </div>
        </div>
        <div className='pt-10 md:pt-24'>
          <div className='flex items-center justify-between px-5 mx-auto mb-3 md:px-0 max-w-7xl'>
            <h1 className='font-bold text-gray-700 md:text-2xl'>Shop by Category</h1>
            <Link href='/products/all'>
              <a className='font-medium text-gray-700 md:text-xl'>Shop All</a>
            </Link>
          </div>
          <div className='grid-cols-3 gap-5 px-5 mx-auto sm:grid max-w-7xl md:px-0'>
            <div className='col-span-1 mb-10 md:mb-0 '>
              <Link href='/categories/footwear'>
                <a>
                  <img src='images/cat-footwear.jpeg' alt='' />
                  <h1 className='flex items-center pt-1 mb-2 text-lg font-medium text-gray-700 md:text-xl hover:underline'>
                    Shop Footwear
                    <RiArrowRightSFill size={30} />
                  </h1>
                </a>
              </Link>
            </div>
            <div className='mb-10 md:mb-0 sm:-mt-3 '>
              <Link href='/categories/clothing'>
                <a>
                  <img src='/images/cat-clothing.jpeg' alt='' />
                  <h1 className='flex items-center pt-1 mb-2 text-lg font-medium text-gray-700 md:text-xl hover:underline'>
                    Shop Clothing
                    <RiArrowRightSFill size={30} />
                  </h1>
                </a>
              </Link>
            </div>
            <div className='mb-10 md:mb-0 '>
              <Link href='/categories/accessories'>
                <a>
                  <img src='/images/cat-accessories.jpeg' alt='' />
                  <h1 className='flex items-center pt-1 mb-2 text-lg font-medium text-gray-700 md:text-xl hover:underline'>
                    Shop Accessories
                    <RiArrowRightSFill size={30} />
                  </h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ShowCase />
    </main>
  )
}

export const getStaticProps = async () => {
  const { data } = await commerce.categories.list()
  return {
    props: {
      data,
    },
  }
}

const ShowCase = () => {
  return (
    <div className='bg-[#F4FAFB] md:my-40 my-20'>
      <div className='max-w-6xl grid-cols-2 mx-auto md:grid'>
        <div className='flex flex-col h-full '>
          <div className='px-5 py-10 my-auto md:py-0 '>
            <h1 className='text-4xl font-light'>
              A new shopping <span className='block pt-3'>experience</span>
            </h1>
            <div className='pt-10'>
              <Link href='/products/all'>
                <a>
                  <div className='inline-flex items-center text-gray-700 border-b border-gray-500'>
                    <span className='mr-5 '>Explore products</span>
                    <HiOutlineArrowNarrowRight />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className='md:-mt-32 md:-mb-32' src='/images/home-showcase-01.jpeg' alt='' />
        </div>
      </div>
    </div>
  )
}
