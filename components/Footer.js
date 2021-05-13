import clsx from 'clsx'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  const socialIconsStyles =
    'bg-primary rounded-full text-white p-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'

  return (
    <div className='bg-[#272727] text-gray-400 mt-20'>
      <div className=' max-w-[90rem] mx-auto py-10 sm:px-12  px-5'>
        <div className='gap-10 space-y-8 border-gray-600 md:grid lg:grid-cols-3 md:grid-cols-2 lg:border-b md:space-y-0'>
          <div className='col-span-1 mb-10'>
            <div className='mb-5 '>
              <h1 className='text-lg font-bold tracking-wider text-gray-100 uppercase'>Megashop</h1>
              <Underline />
            </div>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dignissimos repellat
              architecto tempore eos, cumque at nemo repellendus quibusdam nulla?
            </p>
            <div className='flex items-center space-x-3'>
              <a className={socialIconsStyles} href='/'>
                <FaFacebookF />
              </a>
              <a className={socialIconsStyles} href='/'>
                <FaLinkedinIn />
              </a>
              <a className={socialIconsStyles} href='/'>
                <FaTwitter />
              </a>
              <a className={socialIconsStyles} href='/'>
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className='col-span-1 space-y-4'>
            <div className='mb-5'>
              <h1 className='text-lg font-bold tracking-wider uppercase text-primary'>address</h1>
              <Underline />
            </div>
            <p> 21 Debby Avenue, Nottingham, NG21 5XU</p>
            <span className='flex items-center'>
              <FaEnvelope className='mr-2' />
              <a href='mailto:support@progym.com'>Support@megashop.com</a>
            </span>
            <span className='flex items-center'>
              <FaPhoneAlt className='mr-3' />
              <a href='callto:02056435111'>02056435111</a>
            </span>
          </div>
          <div className='col-span-1'>
            <div className='mb-5'>
              <h1 className='text-lg font-bold tracking-wider uppercase text-primary'>
                Join with us
              </h1>
              <Underline />
            </div>
            <p>
              Thank you for visting us. Please subscribe to our newsletter today for getting regular
              updates & offers.
            </p>
            <SubscribeForm />
          </div>
        </div>
        <div className='max-w-sm mx-auto border-b border-gray-600'>
          <p className='pt-10 mb-5 text-sm tracking-wider text-center text-gray-400 '>
            &#169; {getCurrentYear()} Megashop Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

const SubscribeForm = () => {
  return (
    <div>
      <form className='flex items-center flex-grow mt-5 text-gray-800 rounded-full '>
        <input className='w-full px-2 focus:outline-none' type='text' placeholder='Your email' />
        <input
          className='px-2 py-2.5 cursor-pointer text-gray-300 bg-gray-900 rounded-r-full focus:outline-none'
          type='submit'
          value='Subscribe'
        />
      </form>
    </div>
  )
}

export const Underline = ({ primary }) => {
  return <div className={`${primary ? 'bg-primary' : 'bg-white'} w-12 h-[4px]`}></div>
}
