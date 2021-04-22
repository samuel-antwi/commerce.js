import ProductsList from '../../components/ProductsList';
import { commerce } from '../../lib/commerce';

const Products = ({ data }) => {
  return (
    <div>
      <ProductsList data={data} />
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const { data } = await commerce.products.list();
  return {
    props: {
      data,
    },
  };
};
