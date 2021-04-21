import Product from './Product';

const Products = ({ data }) => {
  return (
    <main className='max-w-7xl mx-auto'>
      <div className='md:grid lg:grid-cols-3 grid-cols-2 gap-5'>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
