import Link from 'next/link';
import { useRouter } from 'next/router';

const CheckoutButton = ({ cart }) => {
  const router = useRouter();

  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
      <div></div>
      <div className='bg-[#F4FAFB]  md:p-10 p-5 mt-5 border-t border-black'>
        <div className=' flex items-center'>
          <h1 className='text-gray-500 mr-3'>Subtotal:</h1>
          <p>{cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div className='flex items-center justify-between mt-5 space-x-3'>
          <button
            onClick={() => router.back()}
            className='border block text-center border-black capitalize py-3 px-1 bg-white w-[300px]'>
            continue shopping
          </button>
          <Link href='/checkout'>
            <a className='border block text-center border-black capitalize py-3 px-1 bg-black text-white w-[300px]'>
              checkout
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutButton;
