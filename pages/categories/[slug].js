import ProductsList from '../../components/ProductsList';
import { commerce } from '../../lib/commerce';

const Category = ({ category, products }) => {
  return (
    <main className='max-w-7xl mx-auto'>
      <div>
        <h1>{category.name}</h1>
        <ProductsList data={products} />
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
