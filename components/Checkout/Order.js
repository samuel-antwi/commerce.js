import Image from 'next/image';

const Order = ({ checkoutToken }) => {
  const {
    live: { line_items, total, discount, tax, total_due },
  } = checkoutToken;

  return (
    <main className='bg-[#F7FBFD] py-10 px-5'>
      <div>
        <h1 className='mb-3'>Your order</h1>
        <hr />
        <div className='pt-3'>
          {line_items.map((item) => (
            <div key={item.id}>
              <div className='flex justify-between mb-3 '>
                <div className='flex'>
                  <Image
                    className='object-cover'
                    src={item.media.source}
                    width={70}
                    height={70}
                    alt={item.name}
                  />
                  <span className='ml-3 text-sm text-gray-800'>
                    <p className=' w-40'>{item.name}</p>
                    <p className='text-gray-400'>Quantity: {item.quantity}</p>
                  </span>
                </div>
                <p className='text-black font-medium'>{item.line_total.formatted_with_symbol}</p>
              </div>
            </div>
          ))}
          <DiscountCodeForm />
          <div className='pt-5'>
            <div className='flex justify-between mb-3'>
              <h1>Subtotal</h1>
              <p>{total.formatted_with_symbol}</p>
            </div>
            <div className='flex justify-between mb-3'>
              <h1>VAT</h1>
              <p>{tax.amount.formatted_with_symbol}</p>
            </div>
            <div className='flex justify-between mb-3'>
              <h1>Discount</h1>
              {!discount.length ? 'No discount applied' : <p>{total.formatted_with_symbol}</p>}
            </div>
            <hr />
            <div className='flex justify-between pt-5 text-xl font-semibold text-black'>
              <h1 className=' tracking-wider'>Total amount</h1>
              <p>{total_due.formatted_with_symbol}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Order;

const DiscountCodeForm = () => {
  return (
    <form>
      <div className='flex pt-5 space-x-4 '>
        <input
          type='text'
          className='border flex-1 p-2 border-[#D6D6D6] focus:ring-1 focus:ring-[#D6D6D6] focus:outline-none'
          name=''
        />
        <button className='bg-black text-gray-50 py-2 px-8 focus:outline-none focus:ring-1 focus:ring-[#D6D6D6] '>
          Apply
        </button>
      </div>
    </form>
  );
};
