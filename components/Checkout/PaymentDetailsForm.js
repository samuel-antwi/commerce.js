import { FaDotCircle } from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';

const PaymentDetailsForm = () => {
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242');
  const [pinNumber, setPinNumber] = useState('123');
  return (
    <main className='pt-10'>
      <h1 className='mb-5'>Payment details</h1>
      <div>
        <form>
          <div className='border p-8 bg-[#F7FBFD]  border-[#D6D6D6] mb-10'>
            <div className='flex items-center mb-5 space-x-2'>
              <FaDotCircle />
              <h1>Credit/debit card</h1>
            </div>
            <div className='sm:grid grid-cols-4 gap-10 mb-4'>
              <div className='col-span-3 flex flex-col mb-3 sm:mb-0'>
                <label className='text-sm text-gray-400'>Card Number</label>
                <input
                  value={cardNumber}
                  className='p-2 border border-[#D6D6D6] focus:outline-none focus:ring-1 focus:ring-[#D6D6D6] '
                  name='cardNumber'
                  type='text'
                />
              </div>
              <div className='col-span-1 flex flex-col'>
                <label className='text-sm text-gray-400'>CVC (CVV)</label>
                <input
                  value={pinNumber}
                  className='p-2 border border-[#D6D6D6] focus:outline-none focus:ring-1 focus:ring-[#D6D6D6] '
                  name='cvc'
                  type='text'
                />
              </div>
            </div>
            <div className='sm:grid grid-cols-2 gap-10 sm:w-1/2'>
              <div className='col-span-1 flex flex-col mb-3 sm:mb-0'>
                <label className='text-sm text-gray-400'>Exp. Month</label>
                <input
                  className='p-2 border border-[#D6D6D6] focus:outline-none focus:ring-1 focus:ring-[#D6D6D6] '
                  name='expiringMonth'
                  type='text'
                />
              </div>
              <div className='col-span-1 flex flex-col '>
                <label className='text-sm text-gray-400'>Exp. Year</label>
                <input
                  className='p-2 border border-[#D6D6D6] focus:outline-none focus:ring-1 focus:ring-[#D6D6D6] '
                  name='expiringYear'
                  type='text'
                />
              </div>
            </div>
          </div>
          <button className='bg-black w-full text-gray-50 py-4 px-8 focus:outline-none focus:ring-1 focus:ring-[#D6D6D6]'>
            Make payment
          </button>
        </form>
      </div>
    </main>
  );
};

export default PaymentDetailsForm;
