import Product from './Product'

const SuggestedProducts = ({ data }) => {
  return data.length > 0 ? (
    <main className='max-w-6xl mx-auto pt-40 px-5'>
      <h1 className='text-2xl font-semibold mb-4 text-gray-600'>People also viewed</h1>
      <div className='md:grid lg:grid-cols-3 grid-cols-2 gap-5'>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  ) : null
}

export default SuggestedProducts
