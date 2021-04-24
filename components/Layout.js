import Head from 'next/head';
import AnnoucementBar from './AnnoucementBar';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import { useRouter } from 'next/router';

const Layout = ({ title, children }) => {
  const router = useRouter();
  return (
    <div className='font-roboto'>
      <Navbar />
      <AnnoucementBar />
      <Head>{title}</Head>
      <div>{children}</div>
      {router.pathname !== '/checkout' && <Footer />}
    </div>
  );
};

export default Layout;
