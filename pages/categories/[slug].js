import Link from 'next/link'
import ProductsList from '../../components/ProductsList'
import { commerce } from '../../lib/commerce'
import { IoMdArrowDropright } from 'react-icons/io'
import { useRouter } from 'next/router'
import { BsChevronRight } from 'react-icons/bs'

const Category = ({ category, products, other_categories }) => {
  const router = useRouter()

  const pathName = router.query.slug

  return (
    <main>
      <div className='mb-5 border-b'>
        <div className='flex items-center px-5 py-4 mx-auto space-x-2 text-sm max-w-7xl'>
          <Link href='/'>
            <a className='text-gray-700 hover:underline'>Home</a>
          </Link>
          <IoMdArrowDropright />
          <h1 className='hover:underline'>{category.name}</h1>
        </div>
      </div>
      <div className='grid-cols-12 gap-5 px-5 mx-auto md:grid max-w-7xl'>
        <div className='hidden col-span-2 text-sm md:block lg:text-base'>
          <h1 className='mb-1 tracking-wide text-gray-700 capitalize'>You have selected</h1>
          <p className='p-1 text-sm tracking-wide transition duration-300 border border-gray-300 hover:bg-gray-800 hover:text-gray-100'>
            {category.name}
          </p>
          <div className='pt-3 text-sm'>
            <h1 className='mb-2'>Other Categories</h1>
            <u className='list-none '>
              {other_categories?.map((cat) => (
                <Link key={cat.id} href={`/categories/${cat.slug}`}>
                  <a className=''>
                    {cat.slug !== pathName && (
                      <div className='flex items-center pl-2 text-gray-700'>
                        <li className='mr-1'>{cat.name}</li>
                        <BsChevronRight />
                      </div>
                    )}
                  </a>
                </Link>
              ))}
            </u>
          </div>
        </div>
        <div className='col-span-10'>
          <ProductsList data={products} />
        </div>
      </div>
    </main>
  )
}

export default Category

export const getStaticPaths = async () => {
  const { data: categories } = await commerce.categories.list()

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const category = await commerce.categories.retrieve(slug, {
    type: 'slug',
  })

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  })

  const { data } = await commerce.categories.list()

  return {
    props: {
      category,
      products,
      other_categories: data,
    },
  }
}
