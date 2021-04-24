import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { BsChevronUp } from 'react-icons/bs';
import useScroll from '../hooks/useScroll';

const Footer = () => {
  const pageHasScrolled = useScroll();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const socialIconsStyles =
    'bg-primary rounded-full text-white p-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110';

  return (
    <div className='bg-[#272727] text-gray-400 mt-20'>
      <div className=' max-w-[90rem] mx-auto py-10 sm:px-12  px-5'>
        <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:border-b border-gray-600 md:space-y-0 space-y-8'>
          <div className='col-span-1 mb-10'>
            <div className=' mb-5'>
              <h1 className='text-gray-100 font-bold uppercase text-lg tracking-wider'>Megashop</h1>
              <Underline primary={true} />
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
              <h1 className='text-primary font-bold uppercase text-lg tracking-wider'>address</h1>
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
              <h1 className='text-primary font-bold uppercase text-lg tracking-wider'>
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
        <div className='border-b border-gray-600 max-w-sm mx-auto'>
          <p className=' text-gray-400 text-sm text-center pt-10 mb-5 tracking-wider'>
            &#169; {getCurrentYear()} Melshop Ltd. All rights reserved.
          </p>
        </div>
      </div>
      {pageHasScrolled && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className='fixed right-5 bottom-5 transition duration-400'>
          <BsChevronUp className='bg-black h-10 w-10 rounded-full p-2.5 text-gray-100' />
        </button>
      )}
    </div>
  );
};

export default Footer;

const SubscribeForm = () => {
  return (
    <div>
      <form className=' mt-5 flex rounded-full bg-white flex-grow items-center text-gray-800 '>
        <div className='text-gray-700 rounded-l-full  py-4 px-3'>
          <FaEnvelope />
        </div>
        <input
          className='focus:outline-none py-3 px-2 w-full'
          type='text'
          placeholder='Your email'
        />
        <button
          className=' bg-gray-900  focus:outline-none  p-3 rounded-r-full text-gray-300'
          type='submit'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export const Underline = ({ primary }) => {
  return <div className={`${primary ? 'bg-primary' : 'bg-white'} w-12 h-[4px]`}></div>;
};
