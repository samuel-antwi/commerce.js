import { commerce } from '../../lib/commerce';

const ProductDetails = ({ product }) => {
  console.log(product);

  return (
    <main>
      <div className='max-w-7xl mx-auto'>
        <h1>{product.name}</h1>
      </div>
    </main>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const { data } = await commerce.products.list();
  return {
    paths: data.map(({ id }) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const product = await commerce.products.retrieve(id);
  return {
    props: {
      product,
    },
  };
};
