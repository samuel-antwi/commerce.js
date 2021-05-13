import { commerce } from '../../lib/commerce'
import Image from 'next/image'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useProductsProvider } from '../../context/ProductsContexProvider'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import ProductsList from '../../components/ProductsList'
import SuggestedProducts from '../../components/SuggestedProducts'

const ProductDetails = ({ product }) => {
  const { handleAddToCart } = useProductsProvider()
  const [viewDetails, setViewDetails] = useState(false)
  const [viewShippingInfo, setViewShippingInfo] = useState(false)
  const { name, media, price, description, variant_groups, id, assets } = product

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
  ]

  return (
    <main className='pt-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid-cols-6 gap-10 md:grid'>
          <div className='relative col-span-4 mb-5 md:mb-0 '>
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
              <div className='px-5 mb-10 md:px-0'>
                <h1 className='mb-2 tracking-wider text-gray-800 md:text-xl'>{name}</h1>
                <p className='mb-3 text-xl font-semibold tracking-wide text-gray-700'>
                  {price.formatted_with_symbol}
                </p>
                <p className='mb-3 text-lg text-green-600'>In stock</p>
                <div className='text-gray-600' dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
            <div className='px-5 pt-6 md:px-0'>
              <button
                onClick={() => handleAddToCart(id, 1)}
                aria-label='add to basket'
                className='flex items-center justify-around w-full py-3 space-x-10 text-gray-300 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500'>
                <span className='tracking-wider uppercase'>Add to basket</span>
                <HiOutlineShoppingCart size={20} />
              </button>
            </div>
            <div className='mx-5 border-b border-black md:mx-0'>
              <button
                onClick={() => {
                  setViewDetails(!viewDetails)
                  viewShippingInfo ? setViewShippingInfo(false) : null
                }}
                aria-label='See shipping information'
                className='flex items-center justify-between w-full mt-12 mb-2 focus:outline-none'>
                <span className='text-gray-800'>Shipping and returns</span>
                {viewDetails ? <BiMinus size={25} /> : <BsPlus size={25} />}
              </button>
              {viewDetails && (
                <p className='pt-3 mb-3 text-sm text-gray-500'>
                  Arrives in 5 to 7 days, returns accepted within 30 days. For more information,
                  click here.
                </p>
              )}
            </div>
            <div className='mx-5 border-b border-black md:mx-0'>
              <button
                onClick={() => {
                  setViewShippingInfo(!viewShippingInfo)
                  viewDetails ? setViewDetails(false) : null
                }}
                aria-label='Read details'
                className='flex items-center justify-between w-full mb-2 mt-7 focus:outline-none'>
                <span className='text-gray-800'>Details</span>
                {viewShippingInfo ? <BiMinus size={25} /> : <BsPlus size={25} />}
              </button>
              {viewShippingInfo && (
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className='pt-3 mb-3 text-sm text-gray-500'
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <SuggestedProducts data={product.related_products.slice(0, 3)} />
      </div>
    </main>
  )
}

export default ProductDetails

// Get product path for static generation
export async function getStaticPaths() {
  const { data: products } = await commerce.products.list({ limit: 100 })

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  }
}

// Get single product details for static page generation at build time
export const getStaticProps = async ({ params }) => {
  const { permalink } = params
  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  })
  return {
    props: {
      product,
    },
  }
}
