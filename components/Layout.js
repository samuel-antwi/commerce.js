import Head from 'next/head';
import AnnoucementBar from './AnnoucementBar';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ title, children }) => {
  return (
    <div className='font-roboto'>
      <Navbar />
      <AnnoucementBar />
      <Head>{title}</Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
