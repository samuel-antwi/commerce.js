import Head from 'next/head';
import AnnoucementBar from './Navbar/AnnoucementBar';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import { useRouter } from 'next/router';
import useScroll from '../hooks/useScroll';
import { BsChevronUp } from 'react-icons/bs';
import Scrollingbar from './Navbar/Scrollingbar';

const Layout = ({ title, children }) => {
  const router = useRouter();
  const pageHasScrolled = useScroll();
  return (
    <div className='font-poppins'>
      <Navbar />
      <Scrollingbar />
      <AnnoucementBar />
      <Head>{title}</Head>
      <div className='pt-32'>{children}</div>
      {router.pathname !== '/checkout' && <Footer />}
      {pageHasScrolled && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className='fixed transition right-5 bottom-5 duration-400'>
          <BsChevronUp className='bg-black h-10 w-10 rounded-full p-2.5 text-gray-100' />
        </button>
      )}
    </div>
  );
};

export default Layout;
