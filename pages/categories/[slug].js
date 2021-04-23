import Link from 'next/link';
import ProductsList from '../../components/ProductsList';
import { commerce } from '../../lib/commerce';
import { IoMdArrowDropright } from 'react-icons/io';
const Category = ({ category, products }) => {
  return (
    <main>
      <div className='border-b mb-5'>
        <div className=' flex items-center py-4 text-sm  space-x-2 max-w-7xl px-5 mx-auto'>
          <Link href='/'>
            <a className='hover:underline text-gray-700'>Home</a>
          </Link>
          <IoMdArrowDropright />
          <h1 className='hover:underline'>{category.name}</h1>
        </div>
      </div>
      <div className='md:grid grid-cols-12 gap-5 max-w-7xl px-5 mx-auto'>
        <div className='col-span-2 hidden md:block text-sm lg:text-base'>
          <h1 className='capitalize text-gray-700 mb-3 tracking-wide'>You have selected</h1>
          <p className='border tracking-wide transition duration-300 border-gray-300 hover:bg-gray-800 hover:text-gray-100 text-sm p-1'>
            {category.name}
          </p>
        </div>
        <div className='col-span-10'>
          <ProductsList data={products} />
        </div>
      </div>
    </main>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: 'slug',
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
    },
  };
};
