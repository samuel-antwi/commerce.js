import Product from './Product';

const ProductsList = ({ data }) => {
  return (
    <main className='max-w-6xl mx-auto'>
      <div className='md:grid lg:grid-cols-3 grid-cols-2 gap-5'>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsList;
